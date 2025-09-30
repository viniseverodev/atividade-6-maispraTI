import { useEffect, useState } from "react";
import styled from "styled-components"
import Navbar from "../components/Navbar"
import ProductCard from "../components/ProductCard";
import SelectorStyles from "../../SelectorStyles";

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
  padding: 1.25rem;

    @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 512px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 1.5rem;
  }
`;

function HomeStyled({ products, onAdd, cartCount }) {
  const [loading, setLoading] = useState(true)
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const initial = saved === 'dark' ? 'dark' : 'light'
    setTheme(initial)
    document.documentElement.setAttribute('data-theme', initial)
  }, [])


  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    localStorage.setItem('theme', next)
    document.documentElement.setAttribute('data-theme', next)
  }

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  return ( 
    <>
      <Navbar cartCount={cartCount} theme={theme} onToggleTheme={toggleTheme} />
      <SelectorStyles />

      <StyledSection aria-label="Lista de produtos">
        {loading 
          ? Array.from({ length: 6 }).map((_, i) => (
              <ProductCard key={'skeleton-' + i} loading /> 
            )) 
          : products.map((p) => (
              <ProductCard key={p.id} product={p} onAdd={() => onAdd(p.id)} buttonVariant={p.buttonVariant} />
            )) }
      </StyledSection> 
    </>

  )
}

export default HomeStyled;