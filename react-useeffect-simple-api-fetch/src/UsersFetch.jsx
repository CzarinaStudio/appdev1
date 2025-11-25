import { useState, useEffect } from 'react';


function UserData() {
    const [users, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users?_limit=5")
      .then(response => response.json())
      .then(data => {
        setUser(data);
        setLoading(false);
    })
      .catch(error => {
        console.error("Error fetching todos:", error);
        setLoading(false);
      });
}, []);

     if (loading) 
        return <p>Loading...</p>;

     return (
        <>
            <h1>User Datalist</h1>
            <ul>
                 {users.map(user => (
          <li key={user.id}>
            Name: {user.name} <br />
            Email: {user.email}
          </li>
        ))}
            </ul>
        </>
     )
}


export default UserData;