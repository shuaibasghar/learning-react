import React from "react";

export default function Tabs({ children, buttons, buttonsContainer }) {
  const ButtonsContainer = buttonsContainer;
  return (
    <>
      {/* <menu>{buttons}</menu> */}
      {/* <buttonsContainer>{buttons}</buttonsContainer>{" "} */}
      {/* you can use this meunu wrapper from where you are sending the buttons props but props name is starting with lowercase it can be treated as builtin html element but there is not any builtin element so we need to store it in a variable like const ButtonsContainer or send and receive it as ButtonsContainer */}
      <ButtonsContainer>{buttons}</ButtonsContainer> {children}
    </>
  );
}
