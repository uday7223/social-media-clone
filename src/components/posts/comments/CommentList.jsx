import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReplyList from '../replies/ReplyList';
import ReplyForm from '../replies/ReplyForm';
import replyIcon from "../../../assets/replyIcon.svg"

const CommentList = ({ post_id }) => {
    const [comments, setComments] = useState([]);
    const [showReplyForm, setShowReplyForm] = useState(null);

    const toggleReplyForm = (comment_id) => {
        setShowReplyForm((prev) => (prev === comment_id ? null : comment_id));
    };

    const handleReplyAdded = (newReply) => {
        console.log('New reply added:', newReply);
    };


    useEffect(() => {
        axios.get(`http://localhost:5000/comments/${post_id}`)
            .then((response) => setComments(response.data))
            .catch((err) => console.error('Error loading comments:', err));
    }, [post_id]);

    return (
        <div className=" comments-list ms-4">
            {comments.map((comment) => (
                <div key={comment.comment_id} className="border p-2 m-2">
                    <strong>{comment.username + ` :`}</strong> {comment.content}    <br />

                    <small>{new Date(comment.created_at).toLocaleString()}</small>

                    <button
                        className="reply-button p-0 btn-one ms-2"
                        onClick={() => toggleReplyForm(comment.comment_id)}
                    >
                         <img src={replyIcon} alt="" />     
                    </button>
                    {showReplyForm === comment.comment_id && (
                        <ReplyForm comment_id={comment.comment_id} onReplyAdded={handleReplyAdded} />
                    )}
                    <ReplyList comment_id={comment.comment_id} />
                </div>
            ))}
        </div>
    );
};

export default CommentList;
