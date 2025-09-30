import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledHeader = styled.header`
  background-color: var(--bg-primary);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  color: var(--text);
`;

const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100rem;
  height: 100%;
  margin: 0 auto;
  padding: .5rem;
`;

const StyledIcon = styled.span`
  margin-right: .25rem;
`;

const StyledTitle = styled.span`
  font-weight: 600;
`;

const StyledActions = styled.nav`
  display: inline-flex;
  gap: 2rem;

    @media (max-width: 512px) {
    display: ${props => (props.menuOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 42px;
    right: 10px;
    background: var(--bg-primary);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    border-radius: 8px;
    gap: 1rem;
  }
`;

const StyledSection = styled.div`
  display: inline-flex;
  align-items: center;
  padding: .25rem 1.5rem;
  border-radius: 999px;
  background-color: var(--color-zinc-200);
  border: 1px solid var(--color-zinc-300);
  cursor: pointer;
`;

const StyledNavLink = styled(NavLink)`
  padding: .5rem 0;
  font-weight: 600;
  transition: color 200ms;
  color: #555;

  &:hover:not(.active) {
    color: #952ff5;
  }

  &.active {
    color: #333;
  }
`;

const StyledTextCatalog = styled.strong`
  border-radius: 999px;
  &:hover {
    color: #952ff5;
    transition-delay: 150ms;
  }
  color: var(--text);
`;

const StyledToggleButton = styled.button`
  display: inline-flex;
  align-items: center;
  background-color: var(--color-zinc-200);
  border: 1px solid var(--color-zinc-300);
  border-radius: 999px;
  padding: 0 1rem;
  cursor: pointer;
  transition: background-color 0.5s 150ms;

  &:hover {
    background-color: var(--color-zinc-300);
  }
`;

const StyledTextButton = styled.span`
  font-weight: 600;
  color: var(--text);

  @media (max-width: 512px) {
    padding: 0.5rem 0;
  }
`;

const StyledCart = styled.div`
  display: inline-flex;
  align-items: center;
  background-color: var(--color-zinc-200);
  border: 1px solid var(--color-zinc-300);
  padding: .5rem 1rem;
  gap: 1rem;
  border-radius: 999px;
`;

const StyledTextCart = styled.span`
  font-weight: 600;
  color: var(--text);
`;

const StyledHamburger = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  span {
    display: block;
    height: 3px;
    width: 100%;
    background-color: var(--text);
    border-radius: 2px;
    transition: 0.3s;
  }

  @media (max-width: 512px) {
    display: flex;
  }  
`;

export default function Navbar({ cartCount, theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <StyledHeader>
      <StyledNavbar>
        <NavLink to="/" aria-label='Página inicial' >
          <StyledIcon aria-hidden='true' className=''>🛍️</StyledIcon>
          <StyledTitle>Shop</StyledTitle>
        </NavLink>

        <StyledHamburger
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="menu"
        >
          <span />
          <span />
          <span />
        </StyledHamburger>

        <StyledActions menuOpen={menuOpen} aria-label='Ações e navegações'>
          <StyledSection aria-label='Seções'>
            <StyledNavLink to="#">
              <StyledTextCatalog>Catálogo</StyledTextCatalog>
            </StyledNavLink>
          </StyledSection>

          <StyledToggleButton type='button'onClick={onToggleTheme} aria-label={theme === 'dark' ? 'Alterar para tema claro' : 'Alterar para tema escuro'} aria-pressed={theme === 'dark'}>
            <span aria-hidden='true' />
            <StyledTextButton>
              {theme === 'dark' ? 'Escuro' : 'Claro'}
            </StyledTextButton>
          </StyledToggleButton>

          <StyledCart>
            <span aria-hidden="true">🛒</span>
            <StyledTextCart>{cartCount}</StyledTextCart>
          </StyledCart>
        </StyledActions>
      </StyledNavbar>
    </StyledHeader>
  )
}