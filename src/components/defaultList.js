import React from 'react'

export const defaultList = () => {

    /* creando arreglo para la lista por default */
  const defaultList = [
    {id: Math.random(),
    item: 'Feed dog'},

    {id: Math.random(),
    item: 'Finish homework'},

    {id: Math.random(),
    item: 'Help mom'}]

  /* para imprimir la lista por default */
  const printDefaultList = defaultList.map(defaultItem => <li>{defaultItem}</li>)

  return (
    <ul>{printDefaultList}</ul>
  )
}
