import React from "react";
import CrimeCard from "./CrimeCard";
import DropDown from "./DropDown";

export default function CrimeList({ data, fetchData }) {
  let arr = [];

  data.forEach(crime => {
    if (!arr.includes(crime.category)) {
      arr.push(crime.category);
    }
  });

  const handleClick = event => {
    fetchData(event.target.value);
  };

  return (
    <div class="flex-container">
      <DropDown handleClick={handleClick} />
      <CrimeCard data={data} />
    </div>
  );
}
