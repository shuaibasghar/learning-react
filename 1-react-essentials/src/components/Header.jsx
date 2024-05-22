import reactImage from "../assets/react-core-concepts.png";

export default function Header() {
  const reactDescription = ["Fundamental", "Crucial", "Core"];

  function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1)); // this function will return a random number between 0 and max
  }
  const description = reactDescription[getRandomInt(2)];
  return (
    <header>
      {/* <img src="src/assets/react-core-concepts.png" alt="Stylized atom" /> */}
      <img src={reactImage} alt="Stylized atom" />

      <h1>React Essentials</h1>
      <p>
        {/* {reactDescription[getRandomInt(2)]} React concepts you will need for */}
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
