import React from 'react'
import { TaskProps } from '../types'

type Props =TaskProps & {}

const FocusScreen:React.FC<Props> = ({task}) => {
    const tas =task[0]


  return tas ? <div>{tas.label}</div> :<div>No task.</div>
}

export default FocusScreen