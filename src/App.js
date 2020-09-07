import React, { useState, useEffect } from "react";
// import logo from './logo.svg';
import "./App.css";
// import NavBar from "./Components/NavBar";

function App() {
  const [list, setList] = useState([
    "mercedes",
    "benz",
    "volkswagen",
    "suzuki",
    "BMW",
    "audi",
    "cadillac",
    "acura",
  ]);
  const [input, setInput] = useState("");
  const [predictedItem, setPredictedItem] = useState("");
  const [showList, setShowList] = useState(true);

  const findItem = (e) => {
    setInput(e.target.value);
    list.map((ls) => {
      if (ls.slice(0, input.length) === input) {
        setPredictedItem(ls);
        setShowList(false);
      }
    });
  };
  useEffect(() => {
    if (predictedItem && input) {
      setShowList(false);
    } else {
      setShowList(true);
    }
  }, [predictedItem, input]);

  return (
    <div className="App">
      {/* list items  */}
      <h1>Cars</h1>
      <br />
      <div className="list">
        {/* search bar  */}
        <div className="input__div">
          <input value={input} onChange={findItem} type="text" />
          <i className="fa fa-search"></i>
        </div>
        <ul>
          {showList ? (
            list.map((ls) => <li>{ls}</li>)
          ) : (
            <li>{predictedItem}</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
