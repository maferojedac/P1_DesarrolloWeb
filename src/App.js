import {React, useState} from 'react'

function App() {

/*arreglo de lista para la lista por default*/
const [defaultList, setDefaultList] = useState(
  [ {id: 1,
    item: 'Feed dog'},

    {id: 2,
    item: 'Finish homework'},

    {id: 3,
    item: 'Help mom'}
  ])

  

  const removeTask = (id) => {
    console.log(id)
  }


  /*para imprimir la lista por default*/
  const printDefaultList = defaultList.map(defaultItem => 
      <li onClick={() => {removeTask(defaultItem.id)}} 
        key={defaultItem.id}> {defaultItem.item} </li>
  );
  

/* arreglo vacío para la lista nueva ingresada por el usuario */
const [list, setList] = useState([])


/* para que el usuario escriba */
const [userInput, setUserInput] = useState("")


/* componente para agregar tareas */
const addTask = () => {

  /* objeto de una nueva tarea */
  const newTask = {
    id: 6,
    content: userInput }

  /* para agregar las nuevas tareas */
  setList([...defaultList, newTask])

  /* para limpiar el input una vez creada la tarea */
  setUserInput("")
}


/* para buscar tareas */
const [searchTask, setSearchTask] = useState("")

/* para borrar tareas */
const [deleteTask, setDeleteTask] = useState("")

/* const newList = (id) => {
  const newList
}  */


  return (
    <div>
      <h1>To-do List</h1>

      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}>
      </input>

      <button onClick={addTask}> + </button>
      <button onClick={() => setUserInput}> Search </button>

      <ul>{printDefaultList}</ul>


    </div>
  )
}

export default App