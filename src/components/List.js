import { React, useState } from 'react'
import {v4 as uuid} from 'uuid';

function List() {

    
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
  const searchTask = (userInput) =>
  {
    /* let find = (defaultList.filter((item) => userInput === defaultList.content)) ? {defaultList.id} : 'Not found'
    
    <li key={userInput.id}> {userInput.content} </li> 
    console.log(list) */
  }



    return (

        
        <ul>
            {defaultList.map((item) => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
    )
}

export default List