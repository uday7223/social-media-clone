import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommentSection = ({ postId }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/posts/${postId}`);
                setComments(response.data.comments || []);
            } catch (err) {
                console.error('Error fetching comments:', err);
            }
        };

        fetchComments();
    }, [postId]);

    const handleAddComment = async () => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) {
            alert('Please log in first.');
            return;
        }

        const newCommentObj = {
            name: user.name,
            text: newComment,
        };

        try {
            const response = await axios.get(`http://localhost:5000/posts/${postId}`);
            const updatedComments = [...response.data.comments, newCommentObj];

            await axios.patch(`http://localhost:5000/posts/${postId}`, {
                comments: updatedComments,
            });

            setComments(updatedComments);
            setNewComment('');
        } catch (err) {
            console.error('Error adding comment:', err);
        }
    };

    return (
        <div>
            <h2>Comments</h2>
            <ul>
                {comments.map((comment, index) => (
                    <li key={index}>
                        <strong>{comment.name}:</strong> {comment.text}
                    </li>
                ))}
            </ul>
            <textarea
                placeholder="Write a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
            />
            <button onClick={handleAddComment}>Add Comment</button>
        </div>
    );
};

export default CommentSection;
