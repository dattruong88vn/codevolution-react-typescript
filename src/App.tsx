import "./App.css";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";

function App() {
  return (
    <div className="App">
      <Private isLoggedIn={true} Component={Profile}></Private>
    </div>
  );
}

export default App;
