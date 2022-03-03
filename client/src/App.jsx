import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getApiAllEmployee } from "./servises/employee-servise";

function App() {
  const [count, setCount] = useState(0);
  const employerData = () => {
    getApiAllEmployee()
      .then((dataEmployee) => console.log(dataEmployee))
      .catch((err) => console.log(err));
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <div>
          <button type="button" onClick={employerData}>Send request to api employees</button>
        </div>
      </header>
    </div>
  );
}

export default App;
