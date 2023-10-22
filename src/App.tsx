import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const nameList = [
    { first: "Van A", last: "Tran" },
    { first: "Thi B", last: "Nguyen" },
    { first: "Thi Hong c", last: "Pham" },
  ];

  return (
    <div className="App">
      <Greet name="Thanh Dat" messageCount={999} isLoggin={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
