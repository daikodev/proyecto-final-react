import React from 'react'
import StarRatings from 'react-star-ratings'
import '../styles/ProductCard.css'

function ProductCard({ product }) {
    return (
        <>
            <div className="col-3">
                <div className="card">
                    <img src={product.image} alt="{product.title}" className="card-img-top img-fluid p-3" />
                    <div className="card-body">
                        <h6 className="text-secondary">{product.category.toUpperCase()}</h6>
                        <h5 className="card-title">{product.title}</h5>
                        <div className='d-flex align-items-center justify-content-between'>
                            <StarRatings rating={product.rating.rate} starRatedColor='gold' numberOfStars={5} starDimension='20px' starSpacing='2px' name='rating' className='d-flex align-items-center' />
                            <h6 className='m-0'>{product.rating.count} votos</h6>
                        </div>
                        <div className='description'>
                            <p className="card-text">{product.description}</p>
                        </div>
                        <span>{product.price}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard