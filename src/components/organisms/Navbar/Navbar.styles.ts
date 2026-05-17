import styled from 'styled-components'

import { media } from '@/theme/media'

export const Nav = styled.nav<{ $hidden?: boolean }>`
  position: fixed;
  z-index: 10;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  width: 100vw;
  max-width: 100vw;
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(${({ $hidden }) => ($hidden ? '-100%' : '0')});

  ${media.mobile} {
    padding-left: 1rem;
    padding-right: 1rem;
    width: 100%;
  }
`

export const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  max-width: var(--reading-width);
  margin: 1rem auto;
  border-radius: 1rem;
  position: relative;
  backdrop-filter: blur(10px);
  list-style: none;
  padding: 0;

  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    inset: 0;
    background: var(--primary-dark);
    opacity: 50%;
    border-radius: 1rem;
  }

  a {
    font-family: var(--font-accent);
    font-weight: 700;
    color: var(--primary-bright);

    &:hover {
      color: var(--primary-dim);
    }
  }
`

export const MenuHeader = styled.li`
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    margin: 1rem;
    font-weight: 600;
    font-family: var(--font-sans);
    color: var(--primary-dim);
  }
`

export const MenuContent = styled.li`
  ul {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    text-align: center;
    gap: 4rem;
    list-style: none;

    ${media.mobile} {
      gap: 1rem;
      margin: 1rem;
    }
  }
`

export const LogoImage = styled.img`
  max-width: 200px;
  height: auto;
`
