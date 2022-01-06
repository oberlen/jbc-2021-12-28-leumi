import { SyntheticEvent } from "react";
import "./Recommended.css";

function Recommended() {
  const item = "Red Wine";

  function showRecommendation(event: SyntheticEvent) {
    console.log(event.target);
    console.log(event.nativeEvent);
    // Converting target to an html button to get inner html
    console.log((event.target as HTMLButtonElement).innerHTML);
    alert(item);
  }

  return (
    <div className="Recommended Box">
      <button onClick={showRecommendation}>Recommend a Product</button>
    </div>
  );
}

export default Recommended;
