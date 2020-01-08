import React from "react";

export default function DropDown({ handleClick }) {
  return (
    <div>
      <label>
        sortBy
        <select onChange={handleClick}>
          <option onClick={handleClick} value="burglary">
            Burglary
          </option>
          <option onClick={handleClick} value="other-theft">
            Other-Theft
          </option>
          <option onClick={handleClick} value="criminal-damage-arson">
            Criminal-Damage-Arson
          </option>
          <option onClick={handleClick} value="violent-crime">
            Violent-Crime
          </option>
          <option onClick={handleClick} value="robbery">
            Robbery
          </option>
        </select>
      </label>
    </div>
  );
}
