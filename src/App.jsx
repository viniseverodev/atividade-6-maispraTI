import { useEffect, useMemo, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './01-css-global/pages/HomeGlobalCSS'
import HomeModules from './02-css-modules/pages/HomeModules'
import HomeTailwind from './03-tailwind/pages/TailwindLayout'
import HomeStyled from './04-css-styled-components/pages/HomeStyled'


const PRODUCTS = [ 
  { id: 1, title: 'Fone Bluetooth Pro Max com Cancelamento de Ruído', price: 499.9, rating: 4.6, tag: 'Novo', image: 'https://picsum.photos/seed/prod1/512' }, 
  { id: 2, title: 'Teclado Mecânico RGB Hot-Swap ABNT2', price: 329.0, rating: 4.8, tag: 'Promo', image: 'https://picsum.photos/seed/prod2/512' }, 
  { id: 3, title: 'Mouse Gamer 26k DPI com Sensor Óptico', price: 259.9, rating: 4.5, tag: 'Novo', image: 'https://picsum.photos/seed/prod3/512' }, 
  { id: 4, title: 'Monitor 27" 144Hz IPS QHD', price: 1899.0, rating: 4.7, tag: 'Promo', image: 'https://picsum.photos/seed/prod4/512' }, 
  { id: 5, title: 'Webcam 1080p com Microfone e Tampa de Privacidade', price: 189.0, rating: 4.3, tag: 'Novo', image: 'https://picsum.photos/seed/prod5/512' }, 
  { id: 6, title: 'Cadeira Ergonômica com Apoio Lombar', price: 1299.0, rating: 4.4, tag: 'Promo', image: 'https://picsum.photos/seed/prod6/512' } 
];

const buttonVariantFromTag = (tag) => {
  if (tag === 'Promo') return 'solid'
  if (tag === 'Novo') return 'outline'
  return 'ghost'
}

export default function App() {
  const [cartCount, setCartCount] = useState(0)

  const productsWithVariant = useMemo(() => {
    return PRODUCTS.map(p => ({ ...p, buttonVariant: buttonVariantFromTag(p.tag) }))
  }, [])

  const handleAdd = () => {
    setCartCount((c) => c + 1)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/01-css-global' element={<HomePage products={productsWithVariant} onAdd={handleAdd} cartCount={cartCount}/>}></Route>
        <Route path='/02-css-modules' element={<HomeModules products={productsWithVariant} onAdd={handleAdd} cartCount={cartCount}/>}></Route>
        <Route path='/03-tailwind' element={<HomeTailwind products={productsWithVariant} onAdd={handleAdd} cartCount={cartCount}/>}></Route>
        <Route path='/04-css-styled-components' element={<HomeStyled products={productsWithVariant} onAdd={handleAdd} cartCount={cartCount}/>}></Route>
        <Route path='*' element={<Navigate to="/03-tailwind" replace />} />
      </Routes>
    </BrowserRouter>
  )
}