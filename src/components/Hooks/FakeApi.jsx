import axios from 'axios';
import React, { useState, useEffect } from 'react';

const FakeAPI = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://my-json-server.typicode.com/typicode/demo/posts"
        );
        setData(response.data);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <h1>Fake API Data</h1>
      {data.map((post) => (
        <div key={post.id}>
          <p>ID: {post.id}</p>
          <p>Title: {post.title}</p>
        </div>
      ))}
    </div>
  );
};

export default FakeAPI;