////////////////////////----> Step-1<---/////////////////////////////////////////////////////////////////

// JSX code goes here
// JSX code is a mix of HTML and JavaScript
// JSX stands for JavaScript XML and is a syntax extension for JavaScript
// JSX is used to describe what the UI should look like
// jsx code is compiled to JavaScript code
// JSX is not a necessity in React, but it makes the code more readable
// Javascript syntax extension
// used to describe and create HTML element in JavaScript in a declarative way.

// with react you write declarative code
// this is a very useful feature
// And this also can be used in non-react projects.

// it is the feature that not supported by the browsers

/* important 
    
    -- the code you see here and in index.jsx file would not work in the browser

    -- instead the code you write as a React Developer is transformed behind the scenes by the development server in this case before it reaches the browser

    -- it transforms the code that does work in the browser.

    -- But as a developer thanks to JSX extension you have more convenient way of describing the user interface of your application.

    -- Here in App.jsx file
    -- is what we can see here is a React Component.
    -- in React a component is really just a Javascript function that returns JSX code.

    -- ---------- must follow the rules of component creation ----------
    -- 1. Component name must start with a capital letter
    -- 2. Component must return a single JSX element
    -- 3. Component must be defined in a separate file
    -- 4. Component must be imported and used in another file

    you can write string arrays in jsx code
    
    */

// you can create you own components

// convert the header to a custom component in App.jsx
// React components are just javascript functions in same App.jsx file also you can create a separate file for the component
// lets see the both ways first see in app.jsx

////////////////////////----> Step-2<---/////////////////////////////////////////////////////////////////

// A Closer Look: Components & File Extensions
/**
 
At this point, you've built a first custom component and you, of course, also worked with the App component.

For the moment, both components are stored in the App.jsx file (this will change later though).

.jsx is a file extension that's not supported by the browser! It's working because you're working in a React project that supports this special extension. Because this extension "tells" the underlying build process (which is running behind the scenes when the development server is running) that a file contains JSX code (which is also not supported by browsers).

It's important to understand that it's really just that build process that cares about this extension.

And therefore, you'll also find React projects that don't use .jsx but instead just .js as a file extension. And in those .js files, you'll also find JSX code. Because it simply depends on the underlying build process which extension is expected when using this JSX syntax in a file.

Since it doesn't work in the browser either way, there is no hard rule regarding this. Instead, you'll find projects that require .jsx (like the project setup we use in this course) and you'll find projects that also support .js (with JSX code inside).

I'm emphasizing this here so that you're not confused if you encounter React projects that don't use .jsx files.

In addition, you'll also find projects that require the file extension as part of file imports (e.g., import App from './App.jsx') and you'll find other projects that don't require this (i.e., there, you could just use import App from './App').

This, again, has nothing to do with the browser or "standard JavaScript" - instead it simply depends on the requirements of the code build process that's part of the project setup you chose

 */

////////////////////////----> Step-3<---/////////////////////////////////////////////////////////////////
//--->   How React Handles Components & How It Builds A "Component Tree" [Core Concept]

/**
 ---  See here Page Source code


<!DOCTYPE html>
<html lang="en">
  <head>
    <script type="module">
import RefreshRuntime from "/@react-refresh"
RefreshRuntime.injectIntoGlobalHook(window)
window.$RefreshReg$ = () => {}
window.$RefreshSig$ = () => (type) => type
window.__vite_plugin_react_preamble_installed__ = true
</script>

    <script type="module" src="/@vite/client"></script>

    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React Essentials</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/index.jsx"></script>
  </body>
</html>


-- see how that component's content ended up on the website and our screen

-- so you don't find header or any other website content in that source code no image no titles nothing

-- just contains some meta data and at least one javascript import

-- one JavaScript file is being loaded that is index.jsx

-- which is the key file in our project because the code that is loaded and executed here is in the end

-- the transformed React code you wrote










 */

////////////////////////----> Step-4<---/////////////////////////////////////////////////////////////////
/*
//---topic covered in this section
 Using & Outputting Dynamic Values [Core Concept]


---> static content
-- content that's hardcoded into the JSX code
-- can not change at run time 
example
<h1>My First React App</h1>

---> dynamic content
-- logic that produces the actual value is added to JSX.
-- Content / value is derived at run time
example
<h1>{userName}</h1>

////////////
see in App.jsx file
// dynamic content 
{reactDescription[getRandomInt(2)]} React concepts you will need for almost any app you are going to build!
// changes on run time
*/

////////////////////////----> Step-5<---/////////////////////////////////////////////////////////////////

/***
 topic--->Setting HTML Attributes Dynamically & Loading Image Files

        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
this way of loading image is not good it may loss in production build

you should use import statement to load image file relative path because now during build process the image file will be copied to the build folder and the path will be adjusted accordingly.
*/

////////////////////////----> Step-6<---/////////////////////////////////////////////////////////////////
//  topic--->Making Components reusable with Props
/***
-- components are reusable
-- components can be used multiple times with different data by using Props

-- Props are used to pass data from a parent component to a child component
-- Props accept any type of data like string,object etc
-- Props are read-only
-- Props are used to make components reusable
-- Props are passed to components like HTML attributes


// NOW Use data from data.js file in App.jsx file
// import { CORE_CONCEPTS } from "./data.js";

// <CoreConcepts image={CORE_CONCEPTS[0].image} title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} />

//--> but when property name and value name are same then you can use like this
// <CoreConcepts {...CORE_CONCEPTS[0]} />




More Prop Syntaxes
Beyond the various ways of setting and extracting props about which you learned in the previous lecture, there are even more ways of dealing with props.

But no worries, you'll see all these different features & syntaxes in action throughout the course!

Passing a Single Prop Object

If you got data that's already organized as a JavaScript object, you can pass that object as a single prop value instead of splitting it across multiple props.

I.e., instead of

<CoreConcept
  title={CORE_CONCEPTS[0].title}
  description={CORE_CONCEPTS[0].description}  
  image={CORE_CONCEPTS[0].image} />
or

<CoreConcept
  {...CORE_CONCEPTS[0]} />
you could also pass a single concept (or any name of your choice) prop to the CoreConcept component:

<CoreConcept
  concept={CORE_CONCEPTS[0]} />
In the CoreConcept component, you would then get that one single prop:

export default function CoreConcept({ concept }) {
  // Use concept.title, concept.description etc.
  // Or destructure the concept object: const { title, description, image } = concept;
}
It is entirely up to you which syntax & approach you prefer.

Grouping Received Props Into a Single Object

You can also pass multiple props to a component and then, in the component function, group them into a single object via JavaScript's "Rest Property" syntax.

I.e., if a component is used like this:

<CoreConcept
  title={CORE_CONCEPTS[0].title}
  description={CORE_CONCEPTS[0].description}  
  image={CORE_CONCEPTS[0].image} />
You could group the received props into a single object like this:

export default function CoreConcept({ ...concept }) { 
  // ...concept groups multiple values into a single object
  // Use concept.title, concept.description etc.
  // Or destructure the concept object: const { title, description, image } = concept;
}
If that syntax is a bit confusing - worry not! You'll also see concrete examples for this syntax (and for why you might want to use it in certain situations) throughout the course!

Default Prop Values

Sometimes, you'll build components that may receive an optional prop. For example, a custom Button component may receive a type prop.

So the Button component should be usable either with a type being set:

<Button type="submit" caption="My Button" />
Or without it:

<Button caption="My Button" />
To make this component work, you might want to set a default value for the type prop - in case it's not passed.

This can easily be achieved since JavaScript supports default values when using object destructuring:

export default function Button({ caption, type = "submit" }) { 
  // caption has no default value, type has a default value of "submit"
}





*/

////////////////////////----> Step-7<---/////////////////////////////////////////////////////////////////
//  topic---> Component Composition: The special "children" Prop

/**
 
import React from "react";

function TabButton(props) {
  return (
    <li>
      <button>{props.children}</button>;
    </li>
  );
}

export default TabButton;

// 

<TabButton>Components</TabButton>    ---this is component composition you will receive an object with special prop children

// Children ---- have value Components
// Children is a builtin React Prop
// you can not pass it as attribute

// instead of writing Components ---> you can write the complex jsx code here also


// you can also use object destructuring for children prop ---> directly write {children}
// this approach is especially convenient when passing JSX code as a value to another component
// for components that take a single piece of renderable content this approach is closer to normal HTML usage.


// Using attributes 
--- <TabButton label="Components"></TabButton> 
--  this approach makes sense if you got multiple smaller pieces of information that must be passed to a component

-- Adding extra props instead of just wrapping the content with the component tags mean extra work

 */
