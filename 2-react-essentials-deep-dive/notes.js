// Fragments: alway use fragment to wrap the component instead of div---because this div is an unnecessary element
// ---short cut for fragment is   <> </> or <React.Fragment> </React.Fragment>

// when you should split your code into components?
// 1. Reusability
// 2. Readability
// 3. Maintainability
// 4. Scalability
// 5. Performance
// 6. Separation of concerns

// see in app.js ----convert the all the code Section element in spearate component

/**
 * ---> Step-02--> Problem: Props Are Not Forwarded To Inner Elements
 *
 * adding some addition component heare which includes a structure like already we have in core_concepts and examples.jsx
 * like having a title and main content
 

import React from "react";

export default function Section({ title, children }) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
// if you are using styling by id or class name must pass it as a prop and use it in the component
// id prop will be ignored

import React from "react";

export default function Section({ title, id, children }) {
  return (
    <section id={id} className={className}>  --------------------adding these props manually is not scalable-----so to make it scalale we can use a pattern  called forwareding props or proxy props---we can add javascript builtin syntax  {...props} to the component  ---it will collect all our props that might be received here  you can use any name spread opertaor instead of ...props 
      <h2>{title}</h2>
      {children}
    </section>
  );
}



// see after adding prop forwarding

export default function Section({ title, id, children }) {
  return (
    <section {...props}> 
      <h2>{title}</h2>
      {children}
    </section>
  );
}



//-----> use this same pattern for tab button component



export default function TabButton({ children,  isSelected,{...props} }) {
  console.log('TABBUTTON COMPONENT EXECUTING');
  return (
    <li>
    //   <button className={isSelected ? 'active' : undefined} onClick={onSelect}>
      <button className={isSelected ? 'active' : undefined} {...props}>

        {children}
      </button>
    </li>
  );
}


//---> while calling this tab button do not pass onSelect but pass default props onClick 

 *
 *
 *
 *
 *
 */
