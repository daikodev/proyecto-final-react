import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import ProductLoader from "../components/ProductLoader";
import "../../src/styles/Store.css";

function Store() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  const handleGetProduct = async () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  };

  useEffect(() => {
    handleGetProduct();
  }, []);

  return (
    <>
      <section className="container py-5">
        <div className="row g-4">
          {isLoading
            ? Array.from({ length: 20 }).map((_, index) => (
                <ProductLoader key={index} />
              ))
            : products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
        </div>
      </section>
    </>
  );
}

export default Store;
