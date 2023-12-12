// Core packages
import Badges from "../../../utils/badge.list";

// Section structure
import Section from "../../../structure/section";
import Container from "../../../structure/container";

// Section general blocks
import SectionTitle from "../../../blocks/section.title";

// Career scss
import career from "../../../../styles/scss/sections/index/career.module.scss";
import Education from "./education";

export default function Career() {
  return (
    <Section classProp={`${career.section} borderBottom`}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="Experience"
          preTitle="Career"
          subTitle="I am a Full Stack Developer, currently working in the web development area."
        />
        <section className={career.area}>
          <div className={career.position}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>G4 Flex Business and Services</h3>
                <h4>2023 · Present</h4>
              </span>
              <p>
                I work as a systems analyst in the company&apos;s development
                sector, developing web solutions for the company&apos;s
                products.
              </p>
            </div>
            <div className={career.companyAlt}></div>

            <Badges
              list={fullStack}
              block="stack"
              fullContainer="fullContainer"
              color={undefined}
            />
          </div>
          <div className={career.position}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Freelancer Developer</h3>
                <h4>2018 · Present</h4>
              </span>
              <p>
                I work as a full stack web and mobile developer providing web
                developer services for several companies.
              </p>
            </div>
            <div className={career.companyAlt}></div>

            <Badges
              list={freelancer}
              block="stack"
              fullContainer="fullContainer"
              color={undefined}
            />
          </div>
        </section>
      </Container>
      <Education />
    </Section>
  );
}

const freelancer = [
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "nodejs", name: "NodeJS", type: "devicon" },
  { key: "react", name: "React", type: "devicon" },
  { key: "nextjs", name: "NextJS", type: "devicon" },
  { key: "html5", name: "HTML5", type: "devicon" },
  { key: "css3", name: "CSS3", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
  { key: "mysql", name: "MySQL", type: "devicon" },
  { key: "mongodb", name: "MongoDB", type: "devicon" },
  { key: "python", name: "Python", type: "devicon" },
  { key: "typescript", name: "TypeScript", type: "devicon" },
  { key: "tailwindcss", name: "TailwindCSS", type: "devicon" },
  { key: "bootstrap", name: "Bootstrap", type: "devicon" },
  { key: "npm", name: "NPM", type: "devicon" },
  { key: "yarn", name: "Yarn", type: "devicon" },
  { key: "firebase", name: "Firebase", type: "devicon" },
  { key: "flask", name: "Flask", type: "devicon" },
];

const fullStack = [
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "nodejs", name: "NodeJS", type: "devicon" },
  { key: "react", name: "React", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
  { key: "postgresql", name: "PostgresSQL", type: "devicon" },
  { key: "mongodb", name: "MongoDB", type: "devicon" },
  { key: "typescript", name: "TypeScript", type: "devicon" },
  { key: "yarn", name: "NPM", type: "devicon" },
];
