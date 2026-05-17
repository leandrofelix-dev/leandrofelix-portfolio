import { TitleWrapper } from './SectionTitle.styles'

export interface SectionTitleProps {
  preTitle: string
  title: string
  subTitle: string
}

export function SectionTitle({ preTitle, title, subTitle }: SectionTitleProps) {
  return (
    <TitleWrapper>
      <h4>{preTitle}</h4>
      <h2>{title}</h2>
      <p className="subtitle">{subTitle}</p>
    </TitleWrapper>
  )
}
