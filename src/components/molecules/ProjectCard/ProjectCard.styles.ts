import styled from 'styled-components'
import { m } from 'framer-motion'

export const ProjectRoot = styled(m.section)<{ $reverse?: boolean }>`
  display: flex;
  flex-direction: ${({ $reverse }) => ($reverse ? 'row-reverse' : 'row')};
  flex-wrap: nowrap;
  user-select: none;
  border-radius: 2rem;
  background-color: var(--background-dim2);
  border: 1px solid var(--primary-dark);
  margin-bottom: 2rem;

  &:hover {
    cursor: pointer;

    svg {
      color: var(--neon-1-1);
    }
  }
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 1;
  gap: var(--size-3x);
  overflow: hidden;
  padding: 2rem;
`

export const ProjectHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--size-3x);

  p {
    font-size: 1.75rem;
    line-height: 1.2;

    strong {
      color: var(--primary-bright);
    }
  }
`

export const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
`

export const PrivateOr = styled.span`
  flex-grow: 0;
  flex-shrink: 1;
  height: fit-content;
`

export const ImageContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  img {
    border-radius: 0.5rem;
    max-width: 100%;
    height: auto;
  }
`

export const ViewProject = styled(m.div)`
  svg {
    height: 1.5rem;
    color: var(--primary);
    transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`
