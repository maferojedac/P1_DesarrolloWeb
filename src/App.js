import {React, useState} from 'react';
import {v4 as uuid} from 'uuid';

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
  const addTask = () => {}
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

/* 
  /* para buscar tareas
  const searchTask = (setUserInput, {defaultList.id} ) =>
  {
    const list = defaultList.filter((item) => item.id === id)
  }
 */

  

  return (
    <div>

      <h1>To-do List</h1>

      <input
        type="text"
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}>
      </input>

      <button onClick={() => addTask(userInput)}> + </button>
      {/* <button onClick={searchTask}> Search </button> */}
      <button onClick={() => deleteTask}> Delete </button>

      {/* para imprimir la lista */}
      <ul>
        {defaultList.map((userInput) => 
        (
          <li key={userInput.id}> {userInput.content} </li> 
        ))}
        
      </ul>

    </div>
      
  )
}

export default App