// Define the props for the CopyBlock component
interface CopyBlockProps {
  containerClass: string
  iconClass?: string
  icon?: any
  title: string
  copy: string
}

// This will return the copy block component
export default function CopyBlock({
  containerClass,
  iconClass,
  icon,
  title,
  copy,
}: CopyBlockProps) {
  // Return the copy block component
  return (
    <div className={containerClass}>
      {/* Removendo ícone temporariamente */}
      <h3>{title}</h3>
      <p>{copy}</p>
    </div>
  )
}
