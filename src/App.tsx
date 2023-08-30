import logo from "./logo.jpg";
import "./App.css";
import { Facts } from "./features/counter/Facts";
import { Facts2 } from "./features/counter/Facts2";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="facts__container">
          <Facts />
          <Facts2 />
        </div>
      </header>
    </div>
  );
}

export default App;
