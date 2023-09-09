import React, { useState } from 'react';
import './App.js';

function App() {
  const [people, setPeople] = useState([
    { id: 1, name: 'sangita', age: 30 },
    { id: 2, name: 'Sonali', age: 25 },
    { id: 3, name: 'Saswatee', age: 35 },
    { id: 3, name: 'Santa', age: 35 },
    { id: 3, name: 'Manisha', age: 35 },
  ]);

  const deletePerson = (id) => {
    const updatedPeople = people.filter((person) => person.id !== id);
    setPeople(updatedPeople);
  };

  return (
    <div className="App">
      <h1>Users List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person) => (
            <tr key={person.id}>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>
                <button onClick={() => deletePerson(person.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;






