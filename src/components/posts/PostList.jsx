import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CreatePost from './CreatePost';
import CommentForm from './comments/CommentForm';
import CommentList from './comments/CommentList';
import img1 from "../../assets/profileImages/img1.svg"
import threeDotsIcon from "../../assets/threeDotsIcon.svg"
import commentIcon from "../../assets/commentIcon.svg"
import likeIcon from "../../assets/likeIcon.svg"


const PostList = ({ newPost }) => {
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const [activePost, setActivePost] = useState(null);  // Track which post's comments are open

    const user = JSON.parse(localStorage.getItem('currentUser'));

    const toggleCommentSection = (postId) => {
        setActivePost((prev) => (prev === postId ? null : postId));  // Toggle active post
    };


    const handleCommentAdded = (newComment) => {
        setComments((prev) => [newComment, ...prev]);
    };

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/posts');
                const postsWithLikes = await Promise.all(response.data.map(async (post) => {
                    const likeRes = await axios.get(`http://localhost:5000/likes/${post.post_id}`);
                    return { ...post, likes: likeRes.data.likeCount };
                }));
                setPosts(postsWithLikes);
                console.log(response.data)
            } catch (err) {
                console.error('Error fetching posts:', err);
            }
        };

        fetchPosts();
    }, [newPost]);

    const handleLike = async (post_id) => {
        const user_id = user.id;  // Simulating user session
        await axios.post('http://localhost:5000/likes', { post_id, user_id });

        setPosts(posts.map((post) =>
            post.post_id === post_id
                ? { ...post, likes: post.likes + (post.likedByUser ? -1 : 1), likedByUser: !post.likedByUser }
                : post
        ));
    };

    // Update post list when a new post is added
    useEffect(() => {
        if (newPost) {
            setPosts((prevPosts) => [newPost, ...prevPosts]);
        }
    }, [newPost]);



    return (
        <div className="container postList ms-4">
            <h2>All Posts</h2>
            <div className="list-group postList-con mb-4">
                {posts.map((post) => (
                    <div key={post.post_id} className="list-group-item m-3 border rounded">
                        <div className='d-flex justify-content-between'>
                            <div>
                                <img src={img1} alt="" className='m-1 mt-2' />
                                <span className='user-name ms-1'>{post.username} </span>
                            </div>
                            <div>
                                <img src={threeDotsIcon} alt="" />
                            </div>
                        </div>

                        <div className="post-details mt-2">
                            <div className='border-bottom'>
                                <h5>{post.title}</h5>
                                <p>{post.content}</p>
                                <h5 className='timeStamp'>{new Date(post.created_at).toLocaleString()}</h5>
                            </div>

                            <div className='border-bottom pb-2 pt-2 d-flex justify-content-around'>
                                <div className="post-actions">
                                    <img
                                        src={likeIcon}
                                        alt="Like"
                                        className={`like-icon ${post.likedByUser ? 'liked' : ''}`}
                                        onClick={() => handleLike(post.post_id)}
                                    />
                                    <span>{post.likes} Likes</span>
                                </div>
                                <img
                                    src={commentIcon}
                                    alt=""
                                    onClick={() => toggleCommentSection(post.post_id)}  // Pass post_id to the handler
                                />
                            </div>

                            {/* Render CommentForm only for the active post */}
                            {activePost === post.post_id && (
                                <CommentForm post_id={post.post_id} onCommentAdded={handleCommentAdded} />
                            )}

                            <CommentList post_id={post.post_id} />
                        </div>
                    </div>
                ))}
            </div>

        </div>


    );
};

export default PostList;
