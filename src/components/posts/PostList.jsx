import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/posts');
                setPosts(response.data);
            } catch (err) {
                console.error('Error fetching posts:', err);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className="container">
            <h2>All Posts</h2>
            <div className="list-group">
                {posts.map((post) => (
                    <div key={post.post_id} className="list-group-item">
                        <h5>{post.title}</h5>
                        <p>{post.content}</p>
                        <small>By: {post.username} on {new Date(post.created_at).toLocaleString()}</small>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PostList;
