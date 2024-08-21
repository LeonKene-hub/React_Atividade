import './App.css';
import Button from './component/Button/button';
import CheckBox from './component/CheckBox/checkBox';
import Input from './component/Input/input';
import TextArea from './component/TextArea/textArea';
import Title from './component/Title/title';


function App() {
  return (
    <div className="App">
      <div className='Form'>
        <Title/>
        <Input placeHolder={"Procurar tarefa"}/>
        <TextArea placeholder={"Exemplo de descricao"}/>
        <CheckBox name={"Teste de Check"}/>
      </div>
        <Button texto={"Teste de componente"}/>
    </div>
  );
}

export default App;
