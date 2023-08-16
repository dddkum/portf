import React, {useState, useEffect} from 'react'
import axios from 'axios';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/')
    .then(response => {
      setPosts(response.data);
    })
    .catch(error => {
      console.error(error);
    });
  }, []);
  
  return (
    <div className="posts-container">
      <p>Блаблабла</p>
      <div>
        {posts.map(post => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;