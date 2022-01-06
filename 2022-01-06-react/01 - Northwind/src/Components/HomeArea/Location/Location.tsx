import { SyntheticEvent } from "react";
import "./Location.css";

function Location() {
  function showLocation(event: SyntheticEvent) {
    alert((event.target as HTMLSelectElement).value);
  }

  return (
    <div className="Location Box">
      <select onChange={showLocation}>
        <option value={1}>מחוז צפון</option>
        <option value={2}>מחוז מרכז</option>
        <option value={3}>מחוז ת״א</option>
        <option value={4}>מחוז דרום</option>
      </select>
    </div>
  );
}

export default Location;
