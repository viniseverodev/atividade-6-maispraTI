import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../styles/navbar.module.css'

export default function Navbar({ cartCount, theme, onToggleTheme }) {
  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <NavLink to="/" aria-label='Página inicial' >
          <span aria-hidden='true' className={styles.iconNav}>🛍️</span>
          <span className={styles.titleIcon}>Shop</span>
        </NavLink>

        <nav className={styles.actionNavigate} aria-label='Ações e navegações'>
          <div className={styles.section} aria-label='Seções'>
            <NavLink to="#" className={styles.navLink} >
              <strong className={styles.textCatalog}>Catálogo</strong>
            </NavLink>
          </div>

          <button type='button' className={styles.toggleThemeButton} onClick={onToggleTheme} aria-label={theme === 'dark' ? 'Alterar para tema claro' : 'Alterar para tema escuro'} aria-pressed={theme === 'dark'}>
            <span aria-hidden='true' />
            <span className={styles.textButtonTheme}>
              {theme === 'dark' ? 'Escuro' : 'Claro'}
            </span>
          </button>

          <div className={styles.cart}>
            <span aria-hidden="true">🛒</span>
            <span className={styles.textCart}>{cartCount}</span>
          </div>
        </nav>
      </div>
    </header>
  )
}