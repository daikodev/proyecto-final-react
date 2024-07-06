import React from 'react'
import StarRatings from 'react-star-ratings'
import '../styles/ProductCard.css'

function ProductCard({ product }) {

    const formatCurrency = (price) => new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'PEN',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(price);

    return (
        <>
            <div className="col-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3">
                <div className="card">
                    <img src={product.image} alt="{product.title}" className="card-img-top img-fluid p-3" />
                    <div className="card-body">
                        <h6 className="text-secondary">{product.category.toUpperCase()}</h6>
                        <h4 className="card-title m-0">{product.title}</h4>
                        <p className="card-text m-0">{product.description}</p>

                        <div className='d-flex align-items-center justify-content-between my-2'>
                            <StarRatings rating={product.rating.rate} starRatedColor='gold' numberOfStars={5} starDimension='20px' starSpacing='2px' name='rating' className='d-flex align-items-center' />
                            <h6 className='m-0'>{product.rating.count} votos</h6>
                        </div>

                        <div className='d-flex align-items-center w-100 justify-content-between mt-3'>
                            <h5 className='m-0'>{formatCurrency(product.price)}</h5>
                            <button className='btn btn-dark fs-6'>Agregar al carrito</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard