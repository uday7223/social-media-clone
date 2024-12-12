// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import Post from './Post';
// import FetchUsers from '../FetchUsers';

// export default function PostList() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/posts');
//         setPosts(response.data);
//       } catch (error) {
//         console.error('Error fetching posts:', error);
//       }
//     };

//     fetchPosts();
//   }, []);

//   return (
//     <div className='postlist border border-1 rounded m-3 w-50 p-4'>
//      <div>
//      <h2>Dashboard</h2>
//      <div className="posts border">
//      {posts.map((post) => (
//         <Post key={post.id} post={post} />
//       ))}
//      </div>
//      </div>
//      <div>

//      </div>
//     </div>
//   );
// }
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/posts');
                setPosts(response.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div>
            <h1>All Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                        <Link to={`/posts/${post.id}`}>View Post</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostList;
