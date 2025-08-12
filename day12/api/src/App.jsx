// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function Mobiles({ phones }) {
  return (
    <div className="card-grid">
      {phones.map((phone, index) => (
        <div className="card" key={index}>
          <h2>{phone.name}</h2>
          <p className="price">${phone.price}</p>
          <p className="meta">Rating: {phone.rating} ⭐</p>
        </div>
      ))}
    </div>
  );
}

function App() {
  const mob = [
    {name:"oppo",price: 20000, rating: 4.5},
    {name:"vivo",price: 15000, rating: 4.0},
    {name:"samsung",price: 30000, rating: 4.8},
    {name:"apple",price: 80000, rating: 5.0}
  ];

  return (
    <div className="App">
      <h1>Mobile List</h1>
      <Mobiles phones={mob}  />
    </div>  )
  }



export default App
