import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
  return (
    <div className='product__card'>
      <Link to={`/product/${product._id}`}>
        <img className='product__img' src={product.imageUrl} alt=''></img>
      </Link>
      <p className='product__name'>{product.name}</p>
      <p className='product__description'>{product.description}</p>
      <Link to={`/product/${product._id}`}>
        <span>
          View Project <i class='fas fa-chevron-right'></i>
        </span>
      </Link>
    </div>
  )
}

export default ProductCard
