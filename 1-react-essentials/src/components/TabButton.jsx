import React from "react";

// function TabButton(props) {
// or
// object destructuring
function TabButton({ children, onSelect, isSelected }) {
  //   function clickHandler(e) {
  //     console.log(e.target);
  //   }
  return (
    <li>
      <button className={isSelected ? "active" : null} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}

export default TabButton;
