import { useState } from "react";
import img1 from "./Images/icon-star.svg";
import img2 from "./Images/illustration-thank-you.svg";

function App() {
  const [selected, setSelected] = useState(false);
  const [ranking, setRanking] = useState(0);
  const [issubmitted, setIsSubmitted] = useState(true);

  const handleClick = (arg) => {
    setSelected(arg);
    setRanking(arg);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleReturn = () => {
    setIsSubmitted(false);
  };

  return (
    <>
      <div className={!issubmitted ? "container" : "container-hide"}>
        <div className="star">
          <img src={img1} alt="Star Icon" />
        </div>
        <div className="header">How did we do?</div>
        <div className="paragraph">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </div>

        <ul className="list-btn">
          <li
            className={selected === 1 ? "selected" : "listknapp"}
            onClick={() => handleClick(1)}
          >
            1
          </li>
          <li
            className={selected === 2 ? "selected" : "listknapp"}
            onClick={() => handleClick(2)}
          >
            2
          </li>
          <li
            className={selected === 3 ? "selected" : "listknapp"}
            onClick={() => handleClick(3)}
          >
            3
          </li>

          <li
            className={selected === 4 ? "selected" : "listknapp"}
            onClick={() => handleClick(4)}
          >
            4
          </li>
          <li
            className={selected === 5 ? "selected" : "listknapp"}
            onClick={() => handleClick(5)}
          >
            5
          </li>
        </ul>
        <div className="btn">
          <button className="btn-submit" onClick={handleSubmit}>
            sumbit
          </button>
        </div>
      </div>

      <div className={issubmitted ? "container2" : "container-hide"}>
        <div className="tel-img">
          <img src={img2} alt="thankyouimage"></img>
        </div>
        <div className="small-text">You selected {ranking} out of 5 </div>
        <div className="header2">Thank you!</div>
        <div className="paragraph2">
          {" "}
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </div>
        <div className="btn">
          <button className="btn-return" onClick={handleReturn}>
            return
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
