import React, { useState } from 'react';
import axios from 'axios';
import replyIcon from "../../../assets/replyIcon.svg"

const ReplyForm = ({ comment_id, onReplyAdded }) => {
    const [content, setContent] = useState('');
    const user = JSON.parse(localStorage.getItem('currentUser'));


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!content) return;
        
        try {
            const response = await axios.post('http://localhost:5000/replies', {
                comment_id,
                user_id: user.id,  // Dummy user_id, replace with actual logged-in user
                content
            });
            onReplyAdded(response.data);
            setContent('');
        } catch (err) {
            console.error('Error adding reply:', err);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="reply-form mt-2">
            <input 
                type="text" 
                placeholder="Write a reply..." 
                value={content} 
                onChange={(e) => setContent(e.target.value)} 
                className="form-control"
            />
            <button type="submit" className=" mt-2 btn-one reply-button">
                <img src={replyIcon} alt="" className='me-1' />reply</button>
        </form>
    );
};

export default ReplyForm;
