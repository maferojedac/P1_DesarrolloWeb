import {React, useState} from 'react';
import {v4 as uuid} from 'uuid';
/* import TextField from "@mui/material/TextField"; */
import './App.css';
import {List} from './components/List';
import {Task} from './components/Task';

function App()
{
/* 
  /* para poner las palomitas de la lista 
  const [check, setCheck] = useState([]) */

   /* para que el usuario escriba */
   const [userInput, setUserInput] = useState("");
   const [changeInput, setChangeInput] = useState("");

  /*arreglo de lista para la lista por default*/

  const defaultList = [ 
    {id: uuid(),
    item: 'Feed dog',
    check: false},

    {id: uuid(),
    item: 'Finish homework',
    check: false},

    {id: uuid(),
    item: 'Help mom',
    check: false} 
  ];

  const [defaultTasks, setDefaultList] = useState(defaultList);
    
  let searchTask;

  if(userInput < 1) {
    searchTask = defaultTasks;
  } else {
    searchTask = defaultTasks.filter(task => {
      const itemText = task.item.toLowerCase();
      const inputText = userInput.toLowerCase();

      return itemText.includes(inputText);
    })
  }
 
  /* componente para borrar las tareas */
  const deleteTask = () => 
  {
    const indexTask = defaultTasks.findIndex(task =>  {
      const itemText = task.item.toLowerCase();
      const inputText = changeInput.toLowerCase();
      return itemText === inputText;
    });
    const newTasks = [...defaultTasks];
    
    if(indexTask!= -1) {
      newTasks.splice(indexTask, 1);
      setDefaultList(newTasks);
    } 
  }

  
 

  const inputChange = (event) => {
    setUserInput(event.target.value);
  }

  const inputModifyChange = (event) => {
    setChangeInput(event.target.value);
  }



  /* componente para agregar tareas */
  const addTask = () =>
  {
    /* para agregar las nuevas tareas */
    const newTasks = [...defaultTasks];
    newTasks.push(
      {id: uuid(),
        item: changeInput,
        check: false
      }
    );
    /* para limpiar el input una vez creada la tarea */
    setDefaultList(newTasks);
  }

  /* para buscar tareas*/
    
  return (
    <>
      
      <h1>To-do List</h1>
      <input
        type="text"
        placeholder="Buscador"
        value={userInput}
        onChange={inputChange}
      />
      <input
        type="text"
        placeholder="Agregar Borrar"
        value={changeInput}
        onChange={inputModifyChange}
      />
      <button onClick={addTask}> + </button>
      <button onClick={deleteTask}> Delete </button>

      <List>
        {searchTask.map(todo => (
            <Task
                key={todo.id}
                text={todo.item}
            />
        ))}
    </List>
    </>
  )
}
export default App