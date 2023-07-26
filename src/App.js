import React from "react";
import "./App.css";
import Counter from "./components/counter";

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  return (
    <>
      <Counter />;
    </>
  );
}

export default App;

// <!-- <h1>오늘의 강릉 날씨</h1>
//     <button onclick="getWeather()">날씨 가져오기</button>
//     <p id="temperature"></p>
//     <script>
//       function getWeather() {
//         fetch("https://")
//           .then((response) => response.json())
//           .then((data) => {
//             document.getElementById("temperature").innerHTML =
//               data["temperature"];
//           });
//       }
//     </script> -->
