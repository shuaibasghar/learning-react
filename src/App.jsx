function App() {
  //header component
  function Header() {
    return (
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
  }

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
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
