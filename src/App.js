import React, { useState } from 'react';
import TodoList from './TodoList';

function App () {
  //Substitui costructor
  const [nome, set_nome] = useState(''),
        [contador, set_contador] = useState(0);
  
  // constructor (props) {
  //   super(props);
  //   this.state = { nome: '',
  //     contador: 0
  //   };
  // }

  // set_contador (novo_contador) {
  //   this.setState({ contador: novo_contador });
  // }

  // change (ev) {
  //   this.setState({ nome: ev.target.value });
  // }

  // render () {
    return (
      <div className="App">
        <h1>Primeira aplicação usando creat react app</h1>
        <input type="text" value={nome}
          onChange={(ev) => set_nome(ev.target.value)}
        />
        <div>
          Contador: {contador}
        </div>
        <TodoList titulo={nome} set_contador={set_contador}/>
      </div>
    );
  // }
  
}

export default App;
