import React from 'react'

export const TodoForm = () => {
  return (
    <form className='TodoForm'>
      <input className="todo-input" type="text" placeholder='What is the task today?' />
      <button className='todo-btn' type='submit'>Add</button>
    </form>
  )
}
