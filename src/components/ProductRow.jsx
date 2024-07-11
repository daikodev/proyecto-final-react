import React from 'react'
import '../styles/ProductRow.css'

function ProductRow({ product }) {
    return (
        <>
            <tr>
                <th scope="row">{product.id}</th>
                <td>{product.category}</td>
                <td>{product.title}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td><img src={product.image} alt="..." className="img-fluid img-row" /></td>
            </tr>
        </>
    )
}

export default ProductRow