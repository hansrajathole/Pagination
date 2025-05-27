import React, { useEffect, useState } from 'react'

const App = () => {
  const [dataa, setData] = useState([])
  const fetchData = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products?limit=50`)
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json()
      // console.log(data)
      setData(data.products)
      console.log('Data fetched successfully:', data);
      
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
      <h1>Fetch Data Example</h1>
      <p>Check the console for fetched data.</p>
      {
        dataa?.map((item , idx) => 
          <div key={idx}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <img src={item.image} alt={item.title} style={{ width: '100px', height: '100px' }} />
          </div>
        )
      }
    </div>
  )
}

export default App
