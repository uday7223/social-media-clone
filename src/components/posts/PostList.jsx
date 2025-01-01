import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CreatePost from './CreatePost';
import CommentForm from './comments/CommentForm';
import CommentList from './comments/CommentList';
import img1 from "../../assets/profileImages/img1.svg"

const PostList = ({ newPost }) => {
    const [posts, setPosts] = useState([]);     
    const [comments, setComments] = useState([]);

    const handleCommentAdded = (newComment) => {
        setComments((prev) => [newComment, ...prev]);
    };

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/posts');
                setPosts(response.data);
                console.log(response.data)
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
        <div className="container postList ms-4">
            <h2>All Posts</h2>
            <div className="list-group postList-con">
                {posts.map((post) => (
                    <div key={post.post_id } className="list-group-item">
                        <img src={img1} alt="" className='m-1 mt-2' />   <span className='user-name ms-1'>{post.username} </span>
                      
                        <div className="post-details ms-3 mt-2">
                        <h5>{post.title}</h5>
                        <p>{post.content}</p>
                        <small>on {new Date(post.created_at).toLocaleString()}</small>

            <CommentForm post_id={post.post_id} onCommentAdded={handleCommentAdded} />
            <CommentList post_id={post.post_id} />
                        </div>
                    </div>
                    
                ))}
            </div>

        </div>

        
    );
};

export default PostList;
