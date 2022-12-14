import {React, useState} from 'react';
import {v4 as uuid} from 'uuid';
/* import TextField from "@mui/material/TextField"; */
import './App.css';
/* import List from './components/List'; */

function App()
{

  /* para poner las palomitas de la lista */
  const [check, setCheck] = useState([])

  /*arreglo de lista para la lista por default*/
  const [defaultList, setDefaultList] = useState
  (
    [ {id: uuid(),
      item: 'Feed dog',
      check: false},

      {id: uuid(),
      item: 'Finish homework',
      check: false},

      {id: uuid(),
      item: 'Help mom',
      check: false} ]
  )

 
  /* componente para borrar las tareas */
  const deleteTask = (id) => 
  {
    const list = defaultList.filter((item) => item.id !== id)
    console.log(id)

    setDefaultList(list)
  }

  
  /* para que el usuario escriba */
  const [userInput, setUserInput] = useState("")


  /* componente para agregar tareas */
  const addTask = () =>
  {
    /* objeto de una nueva tarea */
    const newTask = 
    {
      id: uuid(),
      content: userInput 
    }

    /* para agregar las nuevas tareas */
    setDefaultList([...defaultList, newTask])

    /* para limpiar el input una vez creada la tarea */
    setUserInput("")
  }


  /* para buscar tareas*/
  const searchTask = () =>
  {

    const buscado = defaultList.filter((item) =>
      {
        if(searchTask == "") {return item}
        else if(item.content.toLowerCase().includes(searchTask.toLowerCase()))  {return item}
      })

      return (
        <ul>
          {buscado.map((item) => ( <li key={item.id}> {item.content} </li> ))}
        </ul>
      )
  }

  
  return (
    <div className='main_div'>
      <div className='center_div'>
        <h1>To-do List</h1>

          <input
            type="text"
            placeholder="Escribe tu tarea"
            value={userInput}
            onChange={(event) => setUserInput(event.target.value)}>
          </input>

          <button onClick={() => addTask()}> + </button>
          <button onClick={() => searchTask()}> S </button>
          <button onClick={() => deleteTask()}> D </button>

          {/* <List/> */}

          {/* para imprimir la lista */}
          <ul>
            {defaultList.map((userInput) => 
            (
              <li key={userInput.id}> {userInput.content} </li> 
            ))}
            
          </ul>
      </div>
    </div>
  )
}
export default App