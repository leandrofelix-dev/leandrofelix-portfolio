import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import ThemeMode from '../utils/theme'
import settings from '../../content/_settings.json'
import content from '../../content/navbar.json'
import css from '../../styles/scss/structure/navbar.module.scss'
import Image from 'next/image'

declare global {
  interface Window {
    sticky: {
      nav: HTMLElement | null
      at: number
    }
  }
}

interface RouteEvents {
  addEventListeners: () => void
  removeEventListeners: () => void
  closeMenu: () => void
}

interface ScrollEvents {
  addEventListeners: () => void
  removeEventListeners: () => void
  getPosition: (e: HTMLElement | null, top: boolean) => number
  maybeHideNav: () => void
}

export default function Navbar() {
  const router = useRouter()
  const [menuState, menuToggle] = useState<boolean | undefined>()

  useEffect(() => {
    menuToggle(false)
  }, [])

  useEffect(() => {
    class RouteEventsImpl implements RouteEvents {
      constructor() {
        console.log(
          '%c☰  Navigation Router Events Loaded',
          'background: #060708; color: #fff; padding: .125rem .75rem; border-radius: 5px; font-weight: 900; ',
        )
        this.addEventListeners()
      }

      closeMenu() {
        menuToggle(false)
      }

      addEventListeners() {
        router.events.on('routeChangeComplete', this.closeMenu)
      }

      removeEventListeners() {
        router.events.off('routeChangeComplete', this.closeMenu)
      }
    }

    const routeEvents = new RouteEventsImpl()

    return () => {
      routeEvents.removeEventListeners()
    }
  }, [router.events])

  useEffect(() => {
    class ScrollEventsImpl implements ScrollEvents {
      lastY: number

      constructor() {
        console.log(
          '%c▼  Navigation Scroll Events Loaded',
          'background: #060708; color: #fff; padding: .125rem .75rem; border-radius: 5px; font-weight: 900; ',
        )
        this.lastY = window.scrollY
        window.sticky = {
          nav: document.querySelector(`nav`),
          at: 0,
        }
        this.addEventListeners()
      }

      addEventListeners() {
        if (window.sticky.nav) {
          window.addEventListener('DOMContentLoaded', this.maybeHideNav, false)
          document.addEventListener('scroll', this.maybeHideNav, false)
        }
      }

      removeEventListeners() {
        if (window.sticky.nav) {
          window.removeEventListener(
            'DOMContentLoaded',
            this.maybeHideNav,
            false,
          )
          document.removeEventListener('scroll', this.maybeHideNav, false)
        }
      }

      getPosition(e: HTMLElement | null, top: boolean) {
        let offset = 0

        if (e) {
          if (top) {
            offset =
              e.getBoundingClientRect().top +
              document.documentElement.scrollTop -
              window.sticky.at
          } else {
            offset =
              e.getBoundingClientRect().bottom +
              document.documentElement.scrollTop -
              window.sticky.at
          }
        }

        return offset
      }

      maybeHideNav() {
        const nC = window.sticky.nav!.classList
        const hiddenAt = window.innerHeight / 2

        if (
          window.scrollY > this.lastY &&
          window.scrollY > hiddenAt &&
          !nC.contains(css.hidden)
        ) {
          nC.add(css.hidden)
        } else if (window.scrollY < this.lastY && nC.contains(css.hidden)) {
          nC.remove(css.hidden)
        }

        this.lastY = window.scrollY
      }
    }

    const scrollEvents = new ScrollEventsImpl()

    return () => {
      scrollEvents.removeEventListeners()
    }
  }, [])

  const toggleMenu = () => {
    const bool = !menuState
    menuToggle(bool)
  }

  return (
    <nav id="Navbar" className={css.container}>
      <ul className={css.menu}>
        <li className={css.menuHeader}>
          <Link className={css.logo} href="/">
            <Image
              src="/img/leandrofelix.dev.svg"
              alt="logo"
              width={200}
              height={100}
            />
          </Link>
          <button
            onClick={toggleMenu}
            className={css.mobileToggle}
            data-open={menuState}
          >
            <div>
              <span></span>
              <span></span>
            </div>
          </button>
        </li>
        <li data-open={menuState} className={css.menuContent}>
          <ul>
            {content.map(({ url, title }, index) => {
              return (
                <li key={index}>
                  <Link href={url}>{title}</Link>
                </li>
              )
            })}
            <li>
              <ThemeMode />
            </li>
          </ul>
        </li>
      </ul>

      <span
        onClick={toggleMenu}
        className={css.menuBlackout}
        data-open={menuState}
      ></span>
    </nav>
  )
}
