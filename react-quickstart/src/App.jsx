function StyledBox() {
  const boxStyle = {
    width: "150px",
    height: "50px",
    backgroundColor: "lightgreen",
    border: "2px solid green",
    textAlign: "center",
    lineHeight: "50px",
    marginTop: "10px",
  };

  return <div style={boxStyle}>Styled Box</div>;
}

function App() {
  return (
    <div>
      <h1>Adding Styles</h1>
      <p style={{ color: "blue", fontWeight: "bold" }}>
        This text is styled inline with JSX.
      </p>
      <StyledBox />
    </div>
  );
}

export default App;
