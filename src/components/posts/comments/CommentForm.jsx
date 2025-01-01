import React, { useState } from 'react';
import axios from 'axios';
import commentIcon from "../../../assets/commentIcon.svg"

const CommentForm = ({ post_id, onCommentAdded }) => {
    const [content, setContent] = useState('');
    const user = JSON.parse(localStorage.getItem('currentUser'));
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!content) return;
        

        try {
            console.log(user.id);

            const response = await axios.post('http://localhost:5000/comments', {
                post_id,
                user_id: user.id,
                content
            });
            onCommentAdded(response.data);
            setContent('');

        } catch (err) {
            console.error('Error adding comment:', err);
        }
    };

    return (
       <div className="comment-form ms-4 mt-2">
         <form onSubmit={handleSubmit} className="mb-3">
            <textarea 
                className="form-control mb-2"
                placeholder="Write a comment..." 
                value={content} 
                onChange={(e) => setContent(e.target.value)}>
            </textarea>
            <button type="submit" className="btn-one comment-btn">
                <img src={commentIcon} alt="" className='icon'/> comment
            </button>
        </form>
       </div>
    );
};

export default CommentForm;
