import React from 'react'

const InputField = ({ text, handleInput, handleSubmit }) => {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <label>
      <input value={text} onKeyDown={handleKeyDown} onChange={e => handleInput(e.target.value)}/>
      <button onClick={handleSubmit}>Add Todo</button>
    </label>
  )
}

export default InputField