import { css, RuleSet } from 'styled-components'

const spacingMap: Record<string, RuleSet<object>> = {
  verticalStd: css`
    margin-top: var(--size-1x);
    margin-bottom: var(--size-1x);
    gap: var(--size-1x);
  `,
  verticalMed: css`
    margin-top: var(--size-2x);
    margin-bottom: var(--size-2x);
    gap: var(--size-2x);
  `,
  verticalLrg: css`
    margin-top: var(--size-3x);
    margin-bottom: var(--size-3x);
    gap: var(--size-3x);
  `,
  verticalXLrg: css`
    margin-top: var(--size-4x);
    margin-bottom: var(--size-4x);
    gap: var(--size-4x);
  `,
  verticalXXLrg: css`
    margin-top: var(--size-5x);
    margin-bottom: var(--size-5x);
    gap: var(--size-5x);
  `,
  verticalXXXLrg: css`
    margin-top: var(--size-6x);
    margin-bottom: var(--size-6x);
    gap: var(--size-6x);
  `,
  verticalXXXXLrg: css`
    margin-top: var(--size-7x);
    margin-bottom: var(--size-7x);
    gap: var(--size-7x);
  `,
  bottomMed: css`
    margin-bottom: var(--size-2x);
  `,
  bottomLrg: css`
    margin-bottom: var(--size-3x);
  `,
  bottomXLrg: css`
    margin-bottom: var(--size-4x);
  `,
  bottomXXLrg: css`
    margin-bottom: var(--size-5x);
  `,
  bottomXXXLrg: css`
    margin-bottom: var(--size-6x);
  `,
}

export function resolveSpacing(spacing: string | string[]): RuleSet<object> {
  const keys = Array.isArray(spacing) ? spacing : [spacing]
  return keys
    .map((key) => spacingMap[key])
    .filter(Boolean)
    .reduce(
      (acc, block) => css`
        ${acc}
        ${block}
      `,
      css``,
    )
}
