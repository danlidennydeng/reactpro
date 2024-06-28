import Hello12ObjectDestructure from "./components/Hello12ObjectDestructure";

function App() {
  const person = {
    name: "Rob",
    message: "hi! there",
    seatNumbers: [2, 5, 9],
  };
  return (
    <div className="App">
      Hello, Denny
      <Hello12ObjectDestructure person={person} />
    </div>
  );
}
// where the big comma come from?

export default App;
