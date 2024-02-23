import React from "react";
import { FaPlus } from "react-icons/fa"
import styles from "./AddTask.module.css"

export default function AddTask({ newTask, setNewTask, handleSubmit }) {

  return (
    <form className={styles.addForm} onSubmit={handleSubmit}>
      <input
        autoFocus
        id='addTask'
        type='text'
        placeholder="Add Item"
        required
        value={newTask}
        onChange={({ target }) => setNewTask(target.value)}
      />
      <button
        type="submit"
        aria-label='Add Item'
      >
        <FaPlus/>
      </button>
    </form>
  )
}