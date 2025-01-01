import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CommentList = ({ post_id }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/comments/${post_id}`)
            .then((response) => setComments(response.data))
            .catch((err) => console.error('Error loading comments:', err));
    }, [post_id]);

    return (
        <div className=" comments-list">
            {comments.map((comment) => (
                <div key={comment.comment_id} className="border p   -2">
                    <strong>{comment.username+` :`}</strong> {comment.content}    <br/>
                    
                    <small>{new Date(comment.created_at).toLocaleString()}</small>
                </div>
            ))}
        </div>
    );
};

export default CommentList;
