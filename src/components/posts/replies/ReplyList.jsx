import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ReplyList = ({ comment_id }) => {
    const [replies, setReplies] = useState([]);

    useEffect(() => {
        const fetchReplies = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/replies/${comment_id}`);
                setReplies(response.data);
            } catch (err) {
                console.error('Error fetching replies:', err);
            }
        };

        fetchReplies();
    }, [comment_id]);

    return (
        <div className="replies-list mt-2">
            {replies.map(reply => (
                <div key={reply.reply_id} className="border p-2 mt-1">
                    <strong>{reply.username}</strong>: {reply.content}
                    <p className="text-muted">{new Date(reply.created_at).toLocaleString()}</p>
                </div>
            ))}
        </div>
    );
};

export default ReplyList;
