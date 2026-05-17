import { useEffect } from 'react'

export function GridGap() {
  useEffect(() => {
    const updateGap = () => {
      const root = document.documentElement
      const width = window.innerWidth
      const gap = width < 768 ? 16 : 32
      root.style.setProperty('--grid-32', `${gap}px`)
    }

    updateGap()
    window.addEventListener('resize', updateGap)
    return () => window.removeEventListener('resize', updateGap)
  }, [])

  return null
}
