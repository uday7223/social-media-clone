// import { useEffect, useState } from 'react';
// import axios from 'axios';

// export default function CommentSection({ postId }) {
//   const [comments, setComments] = useState([]);
//   const [newComment, setNewComment] = useState('');

//   useEffect(() => {
//     const fetchComments = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/posts/${postId}`);
//         setComments(response.data.comments || []);
//       } catch (error) {
//         console.error('Error fetching comments:', error);
//       }
//     };

//     fetchComments();
//   }, [postId]);

//   const handleCommentSubmit = async (e) => {
//     e.preventDefault();
//     if (!newComment) return;

//     try {
//       const newCommentObj = {
//         userId: 1, // Replace with the logged-in user ID
//         content: newComment,
//         createdAt: new Date().toISOString(),
//         replies: [],
//       };

//       const response = await axios.patch(`http://localhost:5000/posts/${postId}`, {
//         comments: [...comments, newCommentObj],
//       });

//       setComments(response.data.comments);
//       setNewComment('');
//     } catch (error) {
//       console.error('Error adding comment:', error);
//     }
//   };

//   return (
//     <div className="comment-section">
//       <h4>Comments</h4>
//       {comments.map((comment) => (
//         <div key={comment.id} className="comment">
//           <p>{comment.content}</p>
//           {/* Add a component here to display and add replies */}
//         </div>
//       ))}
//       <form onSubmit={handleCommentSubmit}>
//         <div className='d-flex gap-3'>
//         <input
//           type="text"
//           className='form-control w-50'
//           value={newComment}
//           onChange={(e) => setNewComment(e.target.value)}
//           placeholder="Add a comment"
//           required
//         />
//         <button type="submit " className='btn btn-primary'>Post</button>
//         </div>
//       </form>
//     </div>
//   );
// }
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
