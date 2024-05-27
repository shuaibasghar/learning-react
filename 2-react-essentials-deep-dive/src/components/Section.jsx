import React from "react";

// export default function Section({ title, id, children }) {
//use forwarding props by spread operator all other props will be automatically added
export default function Section({ title, children, ...props }) {
  return (
    // <section id={id} className={className}> instead of using manually props add spread operator
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
