import React from 'react'

const ProductCard = ({ product }) => {
  return (
    <div className='product__card'>
      <img className='product__img' src={product.imageUrl} alt=''></img>
      <p className='product__name'>{product.name}</p>
      <p className='product__description'>{product.description}</p>
      <span href='/project'>
        View Project <i class='fas fa-chevron-right'></i>
      </span>
    </div>
  )
}

export default ProductCard
