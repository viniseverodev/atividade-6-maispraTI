import { useEffect, useState } from "react";
import Navbar from "../components/Navbar"
import ProductCard from "../components/ProductCard";
import SelectorStyles from '../../SelectorStyles';

const products = [ 
  { id: 1, title: 'Fone Bluetooth Pro Max com Cancelamento de Ruído', price: 499.9, rating: 4.6, tag: 'Novo', image: 'https://picsum.photos/seed/prod1/512' }, 
  { id: 2, title: 'Teclado Mecânico RGB Hot-Swap ABNT2', price: 329.0, rating: 4.8, tag: 'Promo', image: 'https://picsum.photos/seed/prod2/512' }, 
  { id: 3, title: 'Mouse Gamer 26k DPI com Sensor Óptico', price: 259.9, rating: 4.5, tag: 'Novo', image: 'https://picsum.photos/seed/prod3/512' }, 
  { id: 4, title: 'Monitor 27" 144Hz IPS QHD', price: 1899.0, rating: 4.7, tag: 'Promo', image: 'https://picsum.photos/seed/prod4/512' }, 
  { id: 5, title: 'Webcam 1080p com Microfone e Tampa de Privacidade', price: 189.0, rating: 4.3, tag: 'Novo', image: 'https://picsum.photos/seed/prod5/512' }, 
  { id: 6, title: 'Cadeira Ergonômica com Apoio Lombar', price: 1299.0, rating: 4.4, tag: 'Promo', image: 'https://picsum.photos/seed/prod6/512' } 
];

function TailwindLayout({ products, onAdd, cartCount}) {
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

      
      <section className="dark:bg-neutral-900  grid grid-cols-3 gap-16 p-5" aria-label="Lista de produtos">
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

export default TailwindLayout;