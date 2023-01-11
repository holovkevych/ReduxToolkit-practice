import React from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo, toggleTodoComplete } from '../store/todoSlice'

const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch()


  return (
    <div>
      <li>
        <input
          type='checkbox'
          checked={completed}
          onChange={() => dispatch(toggleTodoComplete({id}))}
        />
        <span>{text}</span>
        <span className='delete' onClick={() => dispatch(removeTodo({id}))}>
          &times;
        </span>
      </li>
    </div>
  )
}

export default TodoItem