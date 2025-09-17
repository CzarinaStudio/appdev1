function ItemList({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function App() {
  const fruits = ["Apple", "Banana", "Orange", "Mango"];

  return (
    <div>
      <h1>Rendering Lists</h1>
      <ItemList items={fruits} />
    </div>
  );
}

export default App;
