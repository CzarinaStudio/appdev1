function UserInfo({ name, age }) {
  return (
    <p>
      User: <strong>{name}</strong>, Age: <strong>{age}</strong>
    </p>
  );
}

function App() {
  return (
    <div>
      <h1>Displaying Data</h1>
      <p>The current year is: {new Date().getFullYear()}</p>
      <UserInfo name="Alice" age={21} />
    </div>
  );
}

export default App;
