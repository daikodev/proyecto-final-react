import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';
import '../../src/styles/Store.css'

function Store() {
  const [products, setProducts] = useState([]);

  const handleGetProduct = async () => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      });
  }

  useEffect(() => {
    handleGetProduct();
  }, [])

  return (
    <>
      <section className="container">
        <div className="row g-4 py-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Store