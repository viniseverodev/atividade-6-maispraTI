import React, { useState } from 'react'; 
import styled from 'styled-components'

const formatPrice = (v) => { 
  return v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); 
}; 

const StyledProductCard = styled.article`
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  display: flex;
  flex-direction: column;
`;

const StyledLoadingCard = styled(StyledProductCard)`
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  & > * + * {
    margin-top: 1rem;
  }
`;

const StyledLoadingImage = styled.div`
  width: 100%;
  height: 12rem;
  border-radius: 0.5rem;
  background-color: #e5e7eb;
`;

const StyledSkeletonContent = styled.div`
  & > * + * {
    margin-top: .5rem;
  }
`;

const StyledSkeletonLine = styled.div`
  background-color: #e5e7eb;
  border-radius: 0.25rem;
  height: ${(props) => {
    switch(props.$size) {
      case 'h4': return '1rem';
      case 'h10': return '2.5rem';
      default: return '1rem';
    }
  }};
  width: ${(props) => {
    switch(props.$size) {
      case 'w34': return '75%';
      case 'w13': return '33.333333%';
      case 'w12': return '50%';
      case 'wFull': return '100%';
      default: return 'auto';
    }
  }};
`;

const StyledProductCardContent = styled.div`
  position: relative;
`;

const StyledProductTag = styled.span`
  position: absolute;
  top: .5rem;
  left: .5rem;
  background-color: #952ff5;
  color: #fff;
  font-size: .9rem;
  padding: .5rem;
  border-radius: 999px;
`;

const StyledProductLink = styled.a`
  display: block;
  margin-bottom: 1rem;
  overflow: hidden;
`;

const StyledProductImage = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: .5rem;
`;

const StyledFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const StyledProductTitle = styled.h2`
  color: #18181b;
  font-weight: 600;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const StyledProductPrice = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  color: #18181b;
  margin-top: .5rem;
`;

const StyledProductRating = styled.div`
  color: #eab308;
  margin-top: .5rem;
`;

const StyledButtonContainer = styled.div`
  margin-top: auto;
  padding-top: 1rem;
`;

const StyledButton = styled.button`
  padding: .5rem 1rem;
  border-radius: .5rem;
  font-weight: 500;
  cursor: pointer;
  transition: transform 150ms ease-in-out;

  &:hover {
    transform: translateY(-0.125rem);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }

  ${(props) => props.variant === 'solid' && `
    background-color: #952ff5;
    color: #fff;
    border: 1px solid #6e2fa9;
    &:hover { background-color: #6628a0; }
  `}

  ${(props) => props.variant === 'outline' && `
    background-color: transparent;
    color: #952ff5;
    border: 1px solid #952ff5;
    &:hover { background-color: #e6cbff; }
  `}
  
  ${(props) => props.variant === 'ghost' && `
    background-color: #f3e5ff;
    color: #415445;
    border: 1px solid #74697f;
    &:hover { background-color: #d0c8d8; }
  `}
`;


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
      <StyledLoadingCard aria-busy="true" aria-label="Produto carregando"> 
        <StyledLoadingImage/> 
        <StyledSkeletonContent> 
          <StyledSkeletonLine $size="h4" $width="w34"/> 
          <StyledSkeletonLine $size="h4" $width="w13"/> 
          <StyledSkeletonLine $size="h4" $width="w12"/> 
          <StyledSkeletonLine $size="h10" $width="wFull"/> 
        </StyledSkeletonContent> 
      </StyledLoadingCard> 
    ) 
  } 

  return ( 
    <StyledProductCard aria-label={product.title}> 
      <StyledProductCardContent> 
        {product.tag && ( 
          <StyledProductTag>{product.tag}</StyledProductTag> 
        )} 
      </StyledProductCardContent> 

      <StyledProductLink href="#" aria-label={`Ver detalhes de ${product.title}`}> 
        <StyledProductImage
          src={product.image}
          alt={product.title}
          loading="lazy"
          width="512"
          height="512"
        /> 
      </StyledProductLink> 

      <StyledFlexContainer> 
        <StyledProductTitle title={product.title}> 
          {product.title} 
        </StyledProductTitle> 

        <StyledProductPrice> 
          {formatPrice(product.price)} 
        </StyledProductPrice> 

        <StyledProductRating role="img" aria-label={ratingLabel}> 
          {Array.from({ length: 5 }).map((_, i) => ( 
            <span key={i} aria-hidden="true"> 
              {i < Math.round(product.rating) ? '★' : '☆'} 
            </span> 
          ))}
        </StyledProductRating> 

        <StyledButtonContainer> 
          <StyledButton
            type="button"
            onClick={handleClick}
            disabled={pending} 
            aria-disabled={pending} 
            aria-busy={pending} 
            variant={buttonVariant}
          > 
            {pending ? 'Adicionando…' : 'Adicionar'} 
          </StyledButton> 
        </StyledButtonContainer> 
      </StyledFlexContainer> 
    </StyledProductCard> 
  )
}