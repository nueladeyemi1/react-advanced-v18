import React, { useState } from 'react'

const UseStateCounter = () => {
  const [value, setValue] = useState(0)

  const resetCount = function() {
    setValue(0)
  }

  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <h2>Number Counter</h2>
      </section>
      <h2>{value}</h2>
      <button type='button' className='btn' onClick={() => setValue(value - 1)}>
        Decrease
      </button>
      <button type='button' className='btn' onClick={resetCount}>
        Reset
      </button>
      <button type='button' className='btn' onClick={() => setValue(value + 1)}>
        Increase
      </button>
    </>
  )
}

export default UseStateCounter
