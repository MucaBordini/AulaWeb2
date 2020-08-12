import React from 'react';
import TodoList from './TodoList';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = { nome: '',
      contador: 0
    };
  }

  set_contador (novo_contador) {
    this.setState({ contador: novo_contador });
  }

  change (ev) {
    this.setState({ nome: ev.target.value });
  }

  render () {
    return (
      <div className="App">
        <h1>Primeira aplicação usando creat react app</h1>
        <input type="text" value={this.state.nome}
          onChange={this.change.bind(this)}
        />
        <div>
          Contador: {this.state.contador}
        </div>
        <TodoList titulo={this.state.nome} set_contador={this.set_contador.bind(this)}/>
      </div>
    );
  }
  
}

export default App;
