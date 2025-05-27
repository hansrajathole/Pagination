import React, { useEffect } from 'react'

const App = () => {
  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json()
      console.log(data)
    }
    catch (error) {
      console.error('There has been a problem with your fetch operation:', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  
  return (
    <div>
      hello world
    </div>
  )
}

export default App
