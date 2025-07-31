const spacingMap: { [key: string]: string } = {
  // Vertical spacing
  'verticalStd': 'my-1x gap-1x',
  'verticalMed': 'my-2x gap-2x',
  'verticalLrg': 'my-3x gap-3x',
  'verticalXLrg': 'my-4x gap-4x',
  'verticalXXLrg': 'my-5x gap-5x',
  'verticalXXXLrg': 'my-6x gap-6x',
  'verticalXXXXLrg': 'my-7x gap-7x',
  
  // Bottom spacing
  'bottomMed': 'mb-2x',
  'bottomLrg': 'mb-3x',
  'bottomXLrg': 'mb-4x',
  'bottomXXLrg': 'mb-5x',
  'bottomXXXLrg': 'mb-6x',
}

export default function Spacing(spacing: string | number | any[]) {
  const classes = []
  if (Array.isArray(spacing)) {
    spacing.forEach((space) => {
      classes.push(spacingMap[space] || '')
    })
  } else {
    classes.push(spacingMap[spacing] || '')
  }
  return classes.join(' ')
}
