
// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges'
import CopyBlock from '../../blocks/about.copy'

// Section scss
import technical from '../../../styles/scss/sections/index/about.module.scss'


export default function Technical() {
	return (
		<Section classProp={`${technical.section} borderBottom`}>
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Technical"
					preTitle="Hard Skills"
					subTitle="See a little about my skills as a technology professional."
				/>
				<section className={`${technical.content} ${technical.container}`}>
					<div className={technical.copy}>

					<BadgesBlock
							title="Software Development"
							copy="I have programming as a career and main focus of studies. I've been in this area since 2018 and have mastered tools like the ones listed below:"
							list={tech}
							block="tech"
							fullContainer="fullContainer"
							icon="laptop-code"
							containerClass={technical.container}
							headerIcon={technical.icon} invertedColor={undefined}						/>
						<BadgesBlock
							title="Design"
							copy="As a passionate about design and interfaces, I have skills in several graphic creation tools, with those listed below:"
							list={software}
							block="tech"
							fullContainer="fullContainer"
							icon="grid-2-plus"
							containerClass={technical.container}
							headerIcon={technical.icon} invertedColor={undefined}						/>

						

					</div>
					<div className={`${technical.image} ${technical.technicalSvg}`}>
						<Image src="/img/dataism-24.svg" width={477} height={1111} alt="data string background"   loading="eager" />
					</div>
				</section>	
			</Container>
			{/* <SectionGridBg gridSize={4}/> */}
		</Section>
	)
}
{/*Badge Block*/}
const software = [
	{ key: 'photoshop', 	name: 'Photoshop', 			type: 'devicon' },
	{ key: 'illustrator', name: 'Illustrator', type: 'devicon' },
	{ key: 'figma', 		name: 'Figma', 				type: 'devicon' }
]


const tech = [
	{ key: 'javascript', name: 'JavaScript', type: 'devicon' },
	{ key: 'nodejs', name: 'NodeJS', type: 'devicon' },
	{ key: 'react', name: 'React', type: 'devicon' },
	{ key: 'nextjs', name: 'NextJS', type: 'devicon' },
	{ key: 'html5', name: 'HTML5', type: 'devicon' },
	{ key: 'css3', name: 'CSS3', type: 'devicon' },
	{ key: 'git', name: 'Git', type: 'devicon' },
	{ key: 'mysql', name: 'MySQL', type: 'devicon' },
	{ key: 'mongodb', name: 'MongoDB', type: 'devicon' },
	{ key: 'typescript', name: 'TypeScript', type: 'devicon' },
	{ key: 'tailwind', name: 'TailwindCSS', type: 'devicon' },
	{ key: 'npm', name: 'npm', type: 'devicon' },
	{ key: 'yarn', name: 'Yarn', type: 'devicon' },
	{key:"firebase",name:"Firebase",type:"devicon"},
	{key:"python",name:"Python",type:"devicon"},
	{key:"flask",name:"Flask",type:"devicon"}



];