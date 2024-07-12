import React from "react";
import "../styles/ProductRow.css";

function ProductRow({ product }) {
  return (
    <>
      <tr>
        <th scope="row">{product.id}</th>
        <td>{product.category}</td>
        <td>{product.title}</td>
        <td>{product.description}</td>
        <td>{product.price}</td>
        <td>
          <img src={product.image} alt="..." className="img-fluid img-row" />
        </td>
        <td className="d-flex align-items-center ">
          <button className="btn btn-primary mx-1">✔</button>
          <button className="btn btn-danger mx-1">✖</button>
        </td>
      </tr>
    </>
  );
}

export default ProductRow;
