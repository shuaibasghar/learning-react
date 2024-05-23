// import componentsImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";
function App() {
  // const reactDescription = ["Fundamental", "Crucial", "Core"];

  // function getRandomInt(max) {
  //   return Math.floor(Math.random() * (max + 1)); // this function will return a random number between 0 and max
  // }
  // const description = reactDescription[getRandomInt(2)];
  //header component
  // function Header() {
  //   return (
  //     <header>
  //       {/* <img src="src/assets/react-core-concepts.png" alt="Stylized atom" /> */}
  //       <img src={reactImage} alt="Stylized atom" />

  //       <h1>React Essentials</h1>
  //       <p>
  //         {/* {reactDescription[getRandomInt(2)]} React concepts you will need for */}
  //         {description} React concepts you will need for almost any app you are
  //         going to build!
  //       </p>
  //     </header>
  //   );
  // }
  //1. Core Concept component
  // function CoreConcepts(props) {
  //   // console.log(props);
  //   return (
  //     <li>
  //       <img src={props.image} alt="..." />
  //       <h3>{props.title}</h3>
  //       <p>{props.description}</p>
  //     </li>
  //   );
  // }

  // 2. Core Concept component
  // function CoreConcepts({ title, description, image }) {
  //   return (
  //     <li>
  //       <img src={image} alt={title} />
  //       <h3>{title}</h3>
  //       <p>{description}</p>
  //     </li>
  //   );
  // }
  // normally we use  a javascript function by calling it like Header()
  // but in React we do not use like this
  // you can use you component function is like a regular HTML element like <Header /> with self closing tag
  return (
    <div>
      {/* converting header to custom component */}
      {/* <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header> */}

      <Header />

      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* <li>
              <img src="..." alt="..." />
              <h3>TITLE</h3>
              <p>DESCRIPTION</p>
            </li> */}
            {/* <CoreConcepts
              title="Components"
              description="The cord ui building block"
              image={componentsImg}
            /> */}
            {/* <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcepts
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
            <CoreConcepts
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            />
            <CoreConcepts
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            /> */}

            {/* when property name and value both are same */}
            <CoreConcepts {...CORE_CONCEPTS[0]} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        {/* <h2>Time to get started!</h2> */}

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* Component Compisition: The special Children Prop  */}
            <TabButton>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
