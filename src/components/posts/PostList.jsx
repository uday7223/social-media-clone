import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CreatePost from './CreatePost';

const PostList = ({ newPost }) => {
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

    // Update post list when a new post is added
    useEffect(() => {
        if (newPost) {
            setPosts((prevPosts) => [newPost, ...prevPosts]);
        }
    }, [newPost]);
    
    return (
        <div className="container">
            <h2>All Posts</h2>
            <div className="list-group">
                {posts.map((post) => (
                    <div key={post.post_id || post.id || post._id} className="list-group-item">
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
