import React, { useEffect, useState } from "react";
import ProductRow from "../components/ProductRow";

function Products() {
  const [products, setProducts] = useState([]);

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
      <section className="container py-3">
        <div className="d-flex align-items-center justify-content-end mb-2">
          <button className="btn btn-dark">+ Agregar Producto</button>
        </div>

        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">CATEGORÍA</th>
                <th scope="col">TÍTULO</th>
                <th scope="col">DESCRIPCIÓN</th>
                <th scope="col">PRECIO</th>
                <th scope="col">IMAGEN</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <ProductRow key={product.id} product={product} />
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default Products;
