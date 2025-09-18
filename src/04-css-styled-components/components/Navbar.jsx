import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledHeader = styled.header`
  background-color: var(--bg-primary);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
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
    background-color: var(--color-zinc-900);
  }
`;

const StyledTextButton = styled.span`
  font-weight: 600;
  color: var(--color-zinc-900);
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
  color: var(--color-zinc-900);
`;


export default function Navbar({ cartCount, theme, onToggleTheme }) {
  return (
    <StyledHeader>
      <StyledNavbar>
        <NavLink to="/" aria-label='Página inicial' >
          <StyledIcon aria-hidden='true' className=''>🛍️</StyledIcon>
          <StyledTitle>Shop</StyledTitle>
        </NavLink>

        <StyledActions aria-label='Ações e navegações'>
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