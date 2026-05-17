import styled from 'styled-components'
import { m } from 'framer-motion'

export const BadgeListRoot = styled(m.ul)<{ $fullContainer?: boolean }>`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.5rem;
  font-family: var(--font-accent);
  font-weight: 600;
  font-size: var(--font-xs);
  list-style: none;
  padding: 0;
  margin: 0;

  ${({ $fullContainer }) =>
    $fullContainer &&
    `
    border-top: 1px solid var(--primary-dark);
    background: var(--background-dim);
    margin: 0 calc(-1 * var(--padding-left, 2rem)) calc(-1 * var(--padding-bottom, 2rem)) 0;
    padding: var(--padding, 2rem);
    padding-left: var(--padding-left, 2rem);
  `}
`

export const BadgeItem = styled(m.li)`
  position: relative;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  align-items: center;
  border-radius: 999px;
  text-transform: uppercase;
  color: var(--primary-dim);
  padding: 0.25rem 0.75rem;
  border: 1px solid color-mix(in srgb, var(--primary-dim) 10%, transparent);
  background: var(--background-dim2);

  span {
    flex-grow: 1;
    text-align: center;
  }

  i {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 0.75rem;
    height: 1rem;
    padding: 0.125rem;
  }
`
