import React from "react";

// function TabButton(props) {
// or
// object destructuring
function TabButton({ children, onSelect }) {
  //   function clickHandler(e) {
  //     console.log(e.target);
  //   }
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}

export default TabButton;
