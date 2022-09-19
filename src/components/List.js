import { React, useState } from 'react'
import {v4 as uuid} from 'uuid';

function List(props) {

    
  /* para poner las palomitas de la lista */

  return (
      <ul>
          {props.children}
      </ul>
  )
}

export {List};