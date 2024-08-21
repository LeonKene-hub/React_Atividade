import React from 'react';
import CheckBox from '../CheckBox/checkBox';
import "./List.css"

function List({lista}) {
    return (
        <div className='listaHolder'>
            {lista.map((todo) => {
                return(
                    <CheckBox name={todo.name} key={todo.id}/>
                )
            })}
        </div>
    );
}

export default List;