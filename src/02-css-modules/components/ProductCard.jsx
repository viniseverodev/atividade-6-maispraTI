import React, { useState } from 'react'; 
import styles from '../styles/productcard.module.css'

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
      <article className={styles.loading} aria-busy="true" aria-label="Produto carregando"> 
        <div className={styles.cardLoading} /> 
        <div className={styles.skeletonContent}> 
          <div className={`${styles.skeletonLine} ${styles.h4} ${styles.w34}`} /> 
          <div className={`${styles.skeletonLine} ${styles.h4} ${styles.w13}`} /> 
          <div className={`${styles.skeletonLine} ${styles.h4} ${styles.w12}`} /> 
          <div className={`${styles.skeletonLine} ${styles.h10} ${styles.wFull}`}/> 
        </div> 
      </article> 
    ) 
  } 

  return ( 
    <article className={styles.productCard} aria-label={product.title}> 
      <div className={styles.productImageContainer}> 
        {product.tag && ( 
          <span className={styles.productTag}>{product.tag}</span> 
        )} 
      </div> 

      <a href="#" className={styles.productLink} aria-label={`Ver detalhes de ${product.title}`}> 
        <img
          className={styles.productImage}
          src={product.image}
          alt={product.title}
          loading="lazy"
          width="512"
          height="512"
        /> 
      </a> 

      <div className={styles.flexContainer}> 
        <h2 className={styles.productTitle} title={product.title}> 
          {product.title} 
        </h2> 

        <p className={styles.productPrice}> 
          {formatPrice(product.price)} 
        </p> 

        <div className={styles.productRating} role="img" aria-label={ratingLabel}> 
          {Array.from({ length: 5 }).map((_, i) => ( 
            <span key={i} aria-hidden="true"> 
              {i < Math.round(product.rating) ? '★' : '☆'} 
            </span> 
          ))}
        </div> 

        <div className={styles.buttonContainer}> 
          <button
            type="button"
            onClick={handleClick}
            disabled={pending} 
            aria-disabled={pending} 
            aria-busy={pending} 
            className={`${styles.buttonBase} ${buttonVariant === 'solid' ?  styles.buttonSolid : buttonVariant === 'outline' ? styles.buttonOutline : styles.buttonGhost}`}
          > 
            {pending ? 'Adicionando…' : 'Adicionar'} 
          </button> 
        </div> 
      </div> 
    </article> 
  )
}