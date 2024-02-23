import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import styles from "./Tasks.module.css"

export default function TasksList({tasks, handleCheck, handleDelete}) {
  return (
    <ul>
         {tasks.map((task) => (
           <li key={task.id} className={styles.task}>
             <input
               type='checkbox'
               onChange={() => handleCheck(task.id)}
               checked={task.checked}
             />
             <label>{task.task}</label>
             <FaTrashAlt
               onClick={() => handleDelete(task.id)} 
               role='button' 
               tabIndex='0'
             />
           </li>
         ))}
       </ul>
  )
}