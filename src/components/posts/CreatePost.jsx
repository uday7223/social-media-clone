import React, { useState } from 'react';
import axios from 'axios';

const CreatePost = ({ onPostAdded }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem('currentUser'));
        console.log(user);
        

        try {
            const response = await axios.post('http://localhost:5000/posts', {
                user_id: user.id,
                title,
                content,
            });

            if (response.status === 201) {
                onPostAdded(response.data); // Notify PostList
                console.log(response.data);
                setMessage('Post created successfully!');
                setTitle('');
                setContent('');
            }
        } catch (err) {
            setMessage('Error creating post. Please try again.');
        }
    };

    return (
        <div className=" border rounded p-5 my-5 w-50">
            <h2>Create Post</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Content</label>
                    <textarea
                        className="form-control"
                        rows="4"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                {message && <p className="mt-3">{message}</p>}
            </form>
        </div>
    );
};

export default CreatePost;