function App() {
  function handleClick() {
    alert("You clicked me!");
  }

  return (
    <div>
      <h1>Responding to Events</h1>
      <button onClick={handleClick}>
        Click me
      </button>
    </div>
  );
}

export default App;
