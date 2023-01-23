import React, { useState } from 'react'

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Peter',
    age: 24,
    mesage: 'This is the message',
  })

  const changeMessage = function() {
    if (person.mesage === 'This is the message') {
      setPerson({ ...person, mesage: 'The new message' })
    } else {
      setPerson({ ...person, mesage: 'This is the message' })
    }
  }
  return (
    <>
      <h2>useState object example</h2>
      <br />
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.mesage}</h3>

      <button type='button' className='btn' onClick={changeMessage}>
        Change Message
      </button>
    </>
  )
}

export default UseStateObject
