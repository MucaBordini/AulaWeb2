import React, { useState } from 'react';
import './TodoList.css';

export default function TodoList (props) {

    //Substitui o contructor
    const [items, set_items] = useState([]),
          [novo, set_novo] = useState('');

    // constructor (props) {
    //     super(props);
    //     this.state = { items: [], novo: '' };
    // }

    //Substitui adicionar
    function adicionar () {
        set_items([ {texto: novo, checked: false}, ...items]);
        set_novo('');
        props.set_contador(items.length + 1);
    }

    // adicionar () {
    //     const self = this;
    //     this.setState((state) => {
    //         const novo_state = {
    //             novo: '',
    //             items: [ {texto: state.novo, checked: false}, ...state.items]
    //         };
    //        self.props.set_contador(novo_state.items.length);
    //         return novo_state;
    //     });
    // }

    //Substituido na linha 54 no onChange
    // handle_change (ev) { 
    //     this.setState({ novo: ev.target.value })
    // } 

    //Substitui o check
    function check (index) {
        set_items(items.map((item, id) => {
                if ( id === index)
                    return { texto: item.texto, checked: true };
                return item;
            })
        );
    }

    // check (index) {
    //     this.setState((state) => {
    //         return {
    //             items: state.items.map((item, id) => {
    //                 if ( id === index)
    //                     return { texto: item.texto, checked: true };
    //                 return item;
    //             })
    //         }
    //     })
    // }

    //render() {
        return (
            <div className="todo">
                <h2>{props.titulo}</h2>
                <input type="text" value={novo} onChange={(ev) => set_novo(ev.target.value)} />
                <button onClick={() => adicionar()}>Adicionar</button>
                <ul>
                    {items.map((item, index) => {
                        return <li key={index}>
                            <input type="checkbox"
                                onChange={() => check(index)}
                                checked={item.checked}/>
                            <span className={item.checked ? "checked" : null}>{item.texto}</span>
                        </li>
                    })}
                    
                        
                </ul>
            </div>
        );
    //}
}