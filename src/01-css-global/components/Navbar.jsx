import React from 'react'
import { NavLink } from 'react-router-dom'
import "../styles/navbar.css"

export default function Navbar({ cartCount, theme, onToggleTheme }) {
  return (
    <header className="header">
      <div className="navbar">
        <NavLink to="#" aria-label='Página inicial' >
          <span aria-hidden='true' className='iconNav'>🛍️</span>
          <span className='titleIcon'>Shop</span>
        </NavLink>

        <nav className='actionNavigate' aria-label='Ações e navegações'>
          <div className='section' aria-label='Seções'>
            <NavLink to="#" className="navLink" >
              <strong className='textCatalog'>Catálogo</strong>
            </NavLink>
          </div>

          <button type='button' className='toggle-theme-button' onClick={onToggleTheme} aria-label={theme === 'dark' ? 'Alterar para tema claro' : 'Alterar para tema escuro'} aria-pressed={theme === 'dark'}>
            <span aria-hidden='true' />
            <span className='textButtonTheme'>
              {theme === 'dark' ? 'Escuro' : 'Claro'}
            </span>
          </button>

          <div className='cart'>
            <span aria-hidden="true">🛒</span>
            <span className='textCart'>{cartCount}</span>
          </div>
        </nav>
      </div>
    </header>
  )
}