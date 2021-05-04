import './App.css';
import { useState } from 'react';
import Button from './components/Button/Button';
import Input from './components/Input/Input';

const App = () => {

  const [state, setstate] = useState('');
  const [todolist, addtodo] = useState([])

  const IpChangeHandler = (event) => {
        setstate(event.target.value);
  };
  const todoList = () => {
      addtodo((oldTodo) => {
          return [...oldTodo, state];   
      });
      setstate('');
  };

  const List = todolist.map((item) => {
    return <li key={Math.random()}>{item}</li>
  });
  
  return (
    <div className="App">
     <Input change={IpChangeHandler} Value={state}/>
     <p>ToDo to be added is: {state}</p>
     <Button clicked={todoList}>Submit todo</Button>
     <p>All the ToDo's Are:</p>
     <p>{List}</p>
     </div>
  );
}

export default App;


