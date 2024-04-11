import React, { useState, useEffect } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`
    }, [count])
  return (
    <div>
        You clicked {count} times
        <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  )
}

export default Counter