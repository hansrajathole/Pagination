import React, { useEffect, useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [data, setData] = useState([])
  const [currentPage, setcurrentPage] = useState(0)
  const pageSize = 12
  const fetchData = async () => {
    const response = await fetch(`https://dummyjson.com/products?limit=500`);
    const jsonData = await response.json();
    setData(jsonData.products);
    console.log("Data fetched successfully:", data);
  };
  let length = data.length
  let noOfPages = Math.ceil(length/pageSize)
  let start = currentPage * pageSize
  let end = start + pageSize

  useEffect(() => {
    fetchData();
  }, []);

  const handlePage = (p)=>{
    setcurrentPage(p)
  }

  return data.length < 0 ? (
    <div>No data Found</div>
  ) : (
    <div className="App">
      <div className="pagination-text">Pagination.....</div>
      <div className="card-container">
        {data.slice(start, end).map((prod) => (
          <Card key={prod.id} image={prod.thumbnail} title={prod.title} />
        ))}
      </div>
      <div className="page-container">
        {
          [...Array(noOfPages).keys()].map((p)=> <span key={p} onClick={()=>handlePage(p)} className="page">{p}</span> )
        }
      </div>
    </div>
  );
};

export default App;
