import React, { useState } from 'react'; 

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
      <article className="p-4 rounded-2xl shadow-md animate-pulse space-y-4" aria-busy="true" aria-label="Produto carregando"> 
        <div className="w-full h-48 rounded-lg " /> 
        <div className="space-y-2"> 
          <div className="h-4 bg-gray-200 rounded w-3/4" /> 
          <div className="h-4 bg-gray-200 rounded w-1/3" /> 
          <div className="h-4 bg-gray-200 rounded w-1/2" /> 
          <div className="h-10 bg-gray-200 rounded w-full"> 
            <div className="" /> 
          </div> 
        </div> 
      </article> 
    ) 
  } 

  return ( 
    <article className="p-4 rounded-2xl shadow-md flex flex-col dark:border-neutral-800 dark:border-1" aria-label={product.title}> 
      <div className="relative"> 
        {product.tag && ( 
          <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-2 rounded-full">{product.tag}</span> 
        )} 
      </div> 

      <a href="#" className="block mb-4 overflow-hidden" aria-label={`Ver detalhes de ${product.title}`}> 
        <img
          className="block aspect-square w-full h-150 object-cover rounded-lg"
          src={product.image}
          alt={product.title}
          loading="lazy"
          width="512"
          height="512"
        /> 
      </a> 

      <div className="flex flex-col flex-1"> 
        <h2 className="text-zinc-900 dark:text-zinc-100 text-lg font-semibold line-clamp-2" title={product.title}> 
          {product.title} 
        </h2> 

        <p className="text-xl font-bold text-zin-900 dark:text-zinc-100 mt-2"> 
          {formatPrice(product.price)} 
        </p> 

        <div className="text-yellow-500 mt-2" role="img" aria-label={ratingLabel}> 
          {Array.from({ length: 5 }).map((_, i) => ( 
            <span key={i} aria-hidden="true"> 
              {i < Math.round(product.rating) ? '★' : '☆'} 
            </span> 
          ))}
        </div> 

        <div className="mt-auto pt-4"> 
          <button
            type="button"
            onClick={handleClick}
            disabled={pending} 
            aria-disabled={pending} 
            aria-busy={pending} 
            className={`px-4 py-2 rounded-lg font-medium transition-transform transform hover:-translate-y-0.5 ${buttonVariant === "solid"
              ? "bg-blue-600 text-white border border-blue-600 hover:bg-blue-700" : buttonVariant === "outline"
              ? "bg-transparent text-blue-600 border border-blue-600 hover:bg-blue-50"
              : "bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200"}`}
          > 
            {pending ? 'Adicionando…' : 'Adicionar'} 
          </button> 
        </div> 
      </div> 
    </article> 
  )
}