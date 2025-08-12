import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setProducts(data.products)
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="container">
      <h1>Product List</h1>
      <div className="card-grid">
        {products.map(product => (
          <div className="card" key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <h2>{product.title}</h2>
            <p className="price">${product.price}</p>
            <p className="desc">{product.description}</p>
            <p className="meta">Rating: {product.rating} ⭐</p>
            <p className="meta">Stock: {product.stock}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
