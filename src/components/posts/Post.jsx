// import { useState } from 'react';
// import CommentSection from './CommentSection';

// export default function Post({ post }) {
//   return (
//     <div className="post-con m-3 border-2 p-4 border-bottom">
//     <div>
//     <p>{post.content}</p>
//     <CommentSection postId={post.id} />
//     </div>
//         <div>

//         </div>
//     </div>
//   );
// }
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Post = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [newComment, setNewComment] = useState('');
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/posts/${id}`);
                setPost(response.data);
                setComments(response.data.comments || []);
            } catch (error) {
                console.error('Error fetching post:', error);
            }
        };

        fetchPost();
    }, [id]);

    const handleAddComment = async () => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) {
            alert('Please log in first.');
            return;
        }

        const newCommentObj = {
            id: comments.length + 1, // Simple ID generation
            name: user.name,
            text: newComment,
        };

        try {
            const updatedComments = [...comments, newCommentObj];
            await axios.patch(`http://localhost:5000/posts/${id}`, { comments: updatedComments });
            setComments(updatedComments);
            setNewComment('');
        } catch (error) {
            console.error('Error adding comment:', error);
        }
    };

    if (!post) return <p>Loading...</p>;

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <h2>Comments</h2>
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id}>
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

export default Post;
