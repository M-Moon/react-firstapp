import './App.css';
import { useState } from 'react';

const Person = (props) => { // functional components > class-based
  return (
    <>
    <h1>Name: {props.name}</h1>
    <h2>Last name: {props.lastName}</h2>
    <h3>Age: {props.age}</h3>
    </>
  );
};

const App = () => {
  const userName = 'Mark';
  const otherName = 'Billy';

  const [counter, setCounter] = useState(0); // array destructuring for state (HOOK!)

  return (
    <div className="App">
      <h1>Hello React, my friend</h1>
      <h2>yo</h2>
      <Person name={userName} lastName={'Johnson'} age={30}/>
      <Person 
        name={otherName}
        lastName='Jameson' 
        age={45}
      />
      <div></div>
      <button onClick={() => setCounter(counter-1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
    </div> // import / inject function with <Person />
  );
};

export default App;
