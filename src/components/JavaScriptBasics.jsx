import React from 'react';

function JavaScriptBasics() {
  return (
    <div>
      <h2>An Introduction to Abstract Data Types in JavaScript</h2>
      <p>
        Javascript is a flexible, multi-paradigm programming language largely used in web-development 
        for both front-end and back-end applications. While HTML and CSS define the webpage's elements, 
        JavaScript makes them interactive. Frameworks like NodeJS even enable back-end coding in JavaScript.
      </p>
      <h3>What is an Abstract Data Type (ADT)?</h3>
      <p>
        An Abstract Data Type (ADT) is defined more by what it does than how it does it. For example, 
        stacks and queues are abstract data types that focus on the operations they support (like push 
        and pop for a stack, or enqueue and dequeue for a queue) rather than their implementation details.
      </p>
      <h3>Advantages of Using ADTs</h3>
      <ul>
        <li><strong>Encapsulation:</strong> Users interact with the data only through a set of well-defined 
        operations without needing to understand the underlying implementation.</li>
        <li><strong>Compartmentalization:</strong> Changes in the internal workings of an ADT do not affect 
        the code that uses it, as these details are abstracted away.</li>
        <li><strong>Adaptability:</strong> ADTs can evolve to meet changing requirements without necessitating 
        changes to the broader application.</li>
      </ul>
      <h3>Core Operations of ADTs</h3>
      <p>
        ADTs typically support operations like traversing, searching, inserting, deleting, and sorting, 
        which allow them to be integrated into larger software solutions effectively.
      </p>
      <h3>Real-World Example: Linked-lists as an ADT</h3>
      <p>
        Linked-lists consist of nodes that may not be sequentially stored in memory. Each node stores data 
        and the link to the next node. This structure makes them ideal for dynamic data where the amount 
        of data changes over time.
      </p>
      <p>
        Understanding and using ADTs allow developers to abstract complexity in their programs, focusing more 
        on what the program needs to achieve rather than how to specifically implement it.
      </p>
    </div>
  );
}

export default JavaScriptBasics;
