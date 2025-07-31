import React from 'react'

interface SectionProps {
  classProp?: string
  children: React.ReactNode
}

const Section: React.FC<SectionProps> = ({ classProp, children }) => {
  const _class = classProp || ''

  return <div className={`relative flex flex-col w-full overflow-y-clip overflow-x-hidden ${_class}`}>{children}</div>
}

export default Section
