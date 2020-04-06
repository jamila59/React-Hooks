import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

const App = props => {
 const [personsState, setPersonsState] = 
 useState({
      persons: [
        {name: 'Max', age: 28},
        {name: 'Manu', age: 29},
        {name: 'Staph', age: 20},
      ]
    });


const switchName = () => {
  console.log('Was clicked');
  setPersonsState({ 
    persons: [
      {name: 'Maximilian ', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Staph', age: 30},
    ]
  });
};


    return (
      <div className="App">
        <h1>Hi i am  a react</h1>
        <button onClick={switchName}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
    );
  }


export default App;

