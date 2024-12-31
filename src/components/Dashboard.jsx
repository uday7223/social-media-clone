import React, { useState } from 'react'
import CreatePost from './posts/CreatePost';

import PostList from './posts/PostList';

const Dashboard = () => {

    const [newPost, setNewPost] = useState(null);

    const handlePostAdded = (post) => {
        setNewPost(post);   
    };

    return (
     

            <div className='d-flex'>

                <CreatePost onPostAdded={handlePostAdded} />
                <PostList newPost={newPost} />
            </div>


    )
}

export default Dashboard