import React, { useState } from 'react'; 
import "../styles/productcard.css"

const formatPrice = (v) => { 
  return v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); 
}; 

export default function ProductCard({ product, onAdd, buttonVariant = 'solid', loading = false }) { 
  const [pending, setPending] = useState(false); 
  
  const ratingLabel = product ? `${product.rating} de 5 estrelas` : 'Carregando'; 
  
  const handleClick = () => { 
    if (!product || pending) return; 
    setPending(true); 
    setTimeout(() => { 
      onAdd(product.id); 
      setPending(false); 
    }, 600); 
  }; 

  if (loading) { 
    return ( 
      <article className="loading" aria-busy="true" aria-label="Produto carregando"> 
        <div className="cardLoading" /> 
        <div className="skeleton-content"> 
          <div className="skeleton-line h-4 w-3-4" /> 
          <div className="skeleton-line h-4 w-1-3" /> 
          <div className="skeleton-line h-4 w-1-2" /> 
          <div className="skeleton-line h-10 w-full"> 
            <div/> 
          </div> 
        </div> 
      </article> 
    ) 
  } 

  return ( 
    <article className="product-card" aria-label={product.title}> 
      <div className="product-image-container"> 
        {product.tag && ( 
          <span className="product-tag">{product.tag}</span> 
        )} 
      </div> 

      <a href="#" className="product-link" aria-label={`Ver detalhes de ${product.title}`}> 
        <img
          className="product-image"
          src={product.image}
          alt={product.title}
          loading="lazy"
          width="512"
          height="512"
        /> 
      </a> 

      <div className="flex-container"> 
        <h2 className="product-title" title={product.title}> 
          {product.title} 
        </h2> 

        <p className="product-price"> 
          {formatPrice(product.price)} 
        </p> 

        <div className="product-rating" role="img" aria-label={ratingLabel}> 
          {Array.from({ length: 5 }).map((_, i) => ( 
            <span key={i} aria-hidden="true"> 
              {i < Math.round(product.rating) ? '★' : '☆'} 
            </span> 
          ))}
        </div> 

        <div className="button-container"> 
          <button
            type="button"
            onClick={handleClick}
            disabled={pending} 
            aria-disabled={pending} 
            aria-busy={pending} 
            className={`button-base ${buttonVariant === "solid" ? "button-solid" : buttonVariant === "outline" ? "button-outline" : "button-ghost"}`}
          > 
            {pending ? 'Adicionando…' : 'Adicionar'} 
          </button> 
        </div> 
      </div> 
    </article> 
  )
}