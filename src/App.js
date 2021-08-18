import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import FormComponent from './FormComponent';

function App() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://localhost:44355/api/Product")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  return (
    <div className="App">
      <header className="App-header">
      <h1>List of products</h1>
      <table className="ProductTable">
        <thead>
          <th>Title</th>
          <th>Description</th>
          <th>Price</th>
        </thead>
        <tbody>
        {items.map(item => (
          <ProductItem item={item} />
        ))}
        </tbody>
      </table>

      <br/>
      <FormComponent />
      </header>
    </div>
  );
}

export default App;
