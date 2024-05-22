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
