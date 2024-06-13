import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  const handleClick = (arg) => {
    setValue(arg);
    console.log(value);
  };
  return (
    <div className="container">
      <div className="star"></div>
      <div className="header"></div>
      <div className="paragraph"></div>

      <ul className="list-btn">
        <li onClick={() => handleClick(1)}>1</li>
        <li onClick={() => handleClick(2)}>2</li>
        <li onClick={() => handleClick(3)}>3</li>
        <li onClick={() => handleClick(4)}>4</li>
        <li onClick={() => handleClick(5)}>5</li>
      </ul>
    </div>
  );
}

export default App;
