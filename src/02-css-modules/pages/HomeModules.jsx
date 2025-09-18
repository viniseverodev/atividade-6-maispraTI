import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import SelectorStyles from "../../SelectorStyles";
import styles from "../styles/navbar.module.css"

function HomeModules({ products, onAdd, cartCount }) {
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
      <section className={styles.productGrid} aria-label="Lista de produtos">
        {loading 
          ? Array.from({ length: 6 }).map((_, i) => (
              <ProductCard key={'skeleton-' + i} loading /> 
            )) 
          : products.map((p) => (
              <ProductCard key={p.id} product={p} onAdd={() => onAdd(p.id)} buttonVariant={p.buttonVariant} />
            )) }
      </section> 
    </>
  )
}

export default HomeModules;