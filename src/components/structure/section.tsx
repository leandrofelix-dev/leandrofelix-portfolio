
// Section structure scss
import sections from '../../styles/scss/structure/section.module.scss';
import React from "react";

interface SectionProps {
	classProp?: string;
	children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ classProp, children }) => {
	const _class = classProp ? classProp : '';

	return (
		<div className={`${sections.default} ${_class}`}>
			{children}
		</div>
	);
};

export default Section;
