import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar({ cartCount, theme, onToggleTheme }) {
  return (
    <header className=" bg-zinc-50  dark:bg-neutral-800 shadow-sm">
      <div className="max-w-7xl h-full flex justify-between gap-16 mx-auto items-center p-3">
        <NavLink to="/" aria-label='Página inicial' >
          <span aria-hidden='true' className='mr-1'>🛍️</span>
          <span className='font-semibold text-zinc-900 dark:text-zinc-100'>Shop</span>
        </NavLink>

        <nav className='inline-flex gap-5' aria-label='Ações e navegações'>
          <div className='inline-flex px-4 items-center bg-zinc-200 dark:bg-zinc-800 border-1 border-zinc-300 dark:border-zinc-700 rounded-full hover:bg-zinc-300 dark:hover:bg-zinc-700 delay-150 cursor-pointer' aria-label='Seções'>
            <NavLink to="#" className={({ isActive }) => `py-2 font-semibold transition-colors duration-200 ${isActive ? "text-zinc-900 dark:text-zinc-100" : "text-gray-600 hover:text-yellow-500"}`} >
              <strong className='rounded-full hover:text-blue-500 delay-150'>Catálogo</strong>
            </NavLink>
          </div>

          <button type='button' className='inline-flex items-center bg-zinc-200 dark:bg-zinc-800 border-1 border-zinc-300 dark:border-zinc-700 rounded-full px-4 hover:bg-zinc-300 dark:hover:bg-zinc-700 cursor-pointer delay-150'onClick={onToggleTheme} aria-label={theme === 'dark' ? 'Alterar para tema claro' : 'Alterar para tema escuro'} aria-pressed={theme === 'dark'}>
            <span aria-hidden='true' />
            <span className='font-semibold text-zinc-900  dark:text-zinc-100'>
              {theme === 'dark' ? 'Escuro' : 'Claro'}
            </span>
          </button>

          <div className='inline-flex py-2 px-4 bg-zinc-200 dark:bg-zinc-800 border-1 border-zinc-300 dark:border-zinc-700 rounded-full gap-2 items-center'>
            <span aria-hidden="true">🛒</span>
            <span className='font-semibold text-zinc-900 dark:text-zinc-100'>{cartCount}</span>
          </div>
        </nav>
      </div>
    </header>
  )
}