import { useState } from 'react';
import './App.css';
import Button from './component/Button/button';
import CheckBox from './component/CheckBox/checkBox';
import Input from './component/Input/input';
import Title from './component/Title/title';
import List from './component/List/LIst.jsx';


function App() {
  const [lista, setLista] = useState(
    [
      { id: 1, name: "Teste de lista" }, 
      { id: 1, name: "Teste de lista" }, 
      { id: 1, name: "Teste de lista" }, 
      { id: 1, name: "Teste de lista" }, 
      { id: 1, name: "Teste de lista" },
    ])

    function apagar(id) {
      
    }
    function atualizar(id) {
      
    }
  return (
    <div className="App">
      <form className='Form'>
        <div className='titulo_holder'>
          <Title />
          <Input placeHolder={"Procurar tarefa"} />
        </div>

        {/* <CheckBox name={"Teste de Check"} /> */}
        <List lista={lista}/> 
      </form>
      <Button texto={"Teste de componente"} />
    </div>
  );
}

export default App;
