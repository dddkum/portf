import React, {useState, useEffect} from 'react'
import axios from 'axios';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Promise.all([
      axios.get('https://jsonplaceholder.typicode.com/posts/'),
      axios.get("https://jsonplaceholder.typicode.com/users"),
      axios.get("https://jsonplaceholder.typicode.com/photos")
  ])
    .then(([postsResponse, usersResponse, photosResponse]) => {
      setData([
        ...postsResponse.data,
        ...usersResponse.data,
        ...photosResponse.data,
      ]);
    })
    .catch((error) => {
      console.error(error);
    });
  }, []);
  
  return (
    <div className="posts-container">
      <p>Блаблабла</p>
      <div>
        {data.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            {item.body && <p>{item.body}</p>}
            {item.name && <h2>{item.name}</h2>}
            {item.email && <p>{item.email}</p>}
            {item.thumbnailUrl && (
              <>
                <h3>{item.title}</h3>
                <img src={item.thumbnailUrl} alt={item.title} />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;