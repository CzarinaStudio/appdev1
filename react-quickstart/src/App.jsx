function Status({ isLoggedIn }) {
  return (
    <p>{isLoggedIn ? "✅ User is logged in" : "❌ User is not logged in"}</p>
  );
}

function App() {
  return (
    <div>
      <h1>Conditional Rendering</h1>
      <Status isLoggedIn={true} />
      <Status isLoggedIn={false} />
    </div>
  );
}

export default App;
