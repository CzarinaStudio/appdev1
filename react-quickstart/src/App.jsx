function Greeting() {
  return (
    <div>
      <h2>Hello from Greeting component!</h2>
      <p>This is a nested component.</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Creating and Nesting Components</h1>
      <Greeting />
    </div>
  );
}

export default App;
