import React, { useEffect, useState } from 'react'
import QuoraBox from './QuoraBox'
import './css/Feed.css'
import Post from './Post'
import axios from 'axios'


function Feed() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://student-portal-shqh.onrender.com/questions")
      .then((res) => {
        console.log(res.data.reverse());
        setPosts(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className='feed'>
        <QuoraBox/>
        {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
        {/* <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/> */}

    </div>
  )
}

export default Feed