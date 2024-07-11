import React, { useEffect, useState } from 'react'
import ProductRow from '../components/ProductRow';

function Products() {
    const [products, setProducts] = useState([]);

    const handleGetProduct = async () => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }

    useEffect(() => {
        handleGetProduct();
    }, [])

    return (
        <>
            <section className='container py-5'>
                <table class="table table-striped">
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
            </section>
        </>
    )
}

export default Products