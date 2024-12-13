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
        <div className='postlist-con rounded ms-5 p-3 border w-50'>
            <h1 className='text-center'>All Posts</h1>
            <div className="inner-container border">
            <ul>
                {posts.map((post) => (
                    <li key={post.id} className='mb-3 mt-3'>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                        <Link to={`/posts/${post.id}`} className='border py-2 px-4 text-decoration-none rounded '>View Post</Link>
                    </li>
                ))}
            </ul>
            </div>
        </div>
    );
};

export default PostList;
