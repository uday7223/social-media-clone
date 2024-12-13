import axios from 'axios';
import React, { useEffect, useState } from 'react'

const FetchUsers = () => {
    const [allUsers, setAllUsers] = useState([]);

        
   

    useEffect(() => {
        const fetchAllUsers = async(e) =>{
            // e.preventDefault();
            try{
                const response = await axios.get(`http://localhost:5000/users`);
                console.log(response.data);
                
                setAllUsers(response.data || [])
            }catch (error) {
                console.error('Error fetching comments:', error);
              }
    
        }
    
        fetchAllUsers();
        },[]);


  return (
   <>

   <div className="fetchUsers-con">
    {
        allUsers.map((elem)=>{
            const {id, username}= elem;
            return (
                
                <p>{username}</p>
            )

        })
    }
   </div>
   
   </>
  )
}

export default FetchUsers