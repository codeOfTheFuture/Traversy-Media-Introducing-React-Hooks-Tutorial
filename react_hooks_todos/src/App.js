import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Learn about React',
      isCompleted: false,
    },
    {
      text: 'Meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'Build really cool todo app',
      isCompleted: false,
    },
  ]);

  return (
    <div className='app'>
      <dive className='todo-list'>
        {todos.map((todo, index) => {
          <Todo key={index} index={idnex} todo={todo} />;
        })}
      </dive>
    </div>
  );
}

export default App;
