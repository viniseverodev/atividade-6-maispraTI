import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "../styles/navbar.css"

export default function Navbar({ cartCount, theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="navbar">
        <NavLink to="#" aria-label='Página inicial' >
          <span aria-hidden='true' className='iconNav'>🛍️</span>
          <span className='titleIcon'>Shop</span>
        </NavLink>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls='menu'
        >
          <span />
          <span />
          <span />
        </button>

        <nav id='menu' className={`actionNavigate ${menuOpen ? "active" : ""}`} aria-label='Ações e navegações'>
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