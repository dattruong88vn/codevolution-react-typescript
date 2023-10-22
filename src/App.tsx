import "./App.css";
import { List } from "./components/generic/List";

function App() {
  return (
    <div className="App">
      {/* <List
        items={["Batman", "Superman", "Spiderman"]}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}
      <List
        items={[
          { id: 1, first: "Dat", last: "Truong" },
          { id: 2, first: "Dat", last: "09" },
          { id: 3, first: "Dat", last: "Thanh" },
        ]}
        onClick={(item) => console.log(item)}
      />
    </div>
  );
}

export default App;
