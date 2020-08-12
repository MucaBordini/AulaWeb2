import React from 'react';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <h1>Primeira aplicação usando creat react app</h1>
      <TodoList titulo={"Tarefas com Propriedades"} items={['Banana', 'Abacaxi', 'Uva']}/>
    </div>
  );
}

export default App;
