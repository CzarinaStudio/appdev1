import "./App.css"; 

//Code for: i. How to write your first React component
function Profile() {
  return (
    <img
      className="profile-pic" 
      src="src\assets\Luna.jpg"
      alt="luna"
    />
  );
}

// End for: i. How to write your first React component

export default function App() {
  return (
    <section>
      <h1>Assignment 17: Describing the UI</h1>
      <h2>I. My Beloved Pet</h2>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
