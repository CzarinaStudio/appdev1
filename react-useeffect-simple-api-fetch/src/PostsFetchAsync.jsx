import { useState, useEffect } from 'react';


function Posts() {
    const [posts, setPost] = useState([]);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

     if (loading) 
        return <p>Loading...</p>;

     return (
        <>
            <h1>User Datalist</h1>
            <ul>
                 {posts.map(post => (
          <li key={post.id}>
            Title: {post.title} <br />
            Body: {post.body}
          </li>
        ))}
            </ul>
        </>
     )
}


export default Posts;