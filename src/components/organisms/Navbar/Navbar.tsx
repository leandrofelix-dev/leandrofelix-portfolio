import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { ThemeToggle } from '@/providers/ThemeToggle'

import { LogoImage, Menu, MenuContent, MenuHeader, Nav } from './Navbar.styles'

declare global {
  interface Window {
    sticky?: {
      nav: HTMLElement | null
      at: number
    }
  }
}

export function Navbar() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let lastY = window.scrollY
    const nav = document.querySelector('nav')
    window.sticky = { nav, at: 0 }

    const onScroll = () => {
      const hiddenAt = window.innerHeight / 2
      if (window.scrollY > lastY && window.scrollY > hiddenAt) {
        setHidden(true)
      } else if (window.scrollY < lastY) {
        setHidden(false)
      }
      lastY = window.scrollY
    }

    window.addEventListener('scroll', onScroll, false)
    return () => window.removeEventListener('scroll', onScroll, false)
  }, [])

  return (
    <Nav id="Navbar" $hidden={hidden}>
      <Menu>
        <MenuHeader>
          <Link to="/">
            <LogoImage src="/img/leandrofelix.dev.svg" alt="logo" />
          </Link>
        </MenuHeader>
        <MenuContent>
          <ul>
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </MenuContent>
      </Menu>
    </Nav>
  )
}
