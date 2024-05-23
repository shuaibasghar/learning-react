import React from "react";

// function TabButton(props) {
// or
// object destructuring
function TabButton({ children }) {
  return (
    <li>
      <button>{children}</button>;
    </li>
  );
}

export default TabButton;
