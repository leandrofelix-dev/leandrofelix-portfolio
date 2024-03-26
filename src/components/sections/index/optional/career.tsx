
import Badges from "../../../utils/badge.list";
import Section from "../../../structure/section";
import Container from "../../../structure/container";
import SectionTitle from "../../../blocks/section.title";
import career from "../../../../styles/scss/sections/index/career.module.scss";
import Education from "./education";

export default function Career() {
  return (
    <Section classProp={`${career.section} borderBottom`}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="Experiências Profissionais"
          preTitle="Timeline profissional"
          subTitle="Um breve resumo da minha experiência profissional."
        />
        <section className={career.area}>
          <div className={career.position}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>G4 Flex Business and Services</h3>
                <h4>2023 · Atualmente</h4>
              </span>
              <p>
                Desenvolvimento fullstack web de soluções e produtos comerciais da empresa.
              </p>
            </div>
            <div className={career.companyAlt}></div>

            <Badges
              list={G4Flex}
              block="stack"
              fullContainer="fullContainer"
              color={undefined}
            />
          </div>
          <div className={career.position}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Alfa Comunicação</h3>
                <h4>2021 · 2022</h4>
              </span>
              <p>
                Desenvolvimento frontend no projeto da landing page da empresa.
              </p>
            </div>
            <div className={career.companyAlt}></div>

            <Badges
              list={AlfaComunicacao}
              block="stack"
              fullContainer="fullContainer"
              color={undefined}
            />
          </div>
          <div className={career.position}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Freelancer</h3>
                <h4>2018 · Atualmente</h4>
              </span>
              <p>
                Prestação de serviços em desenvolvimento web/mobile ocasionais em diversas empresas de tecnologia e outros setores.
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
  { key: "yarn", name: "NPM", type: "devicon" },
  { key: "firebase", name: "Firebase", type: "devicon" },
  { key: "flask", name: "Flask", type: "devicon" },
];

const G4Flex = [
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "nodejs", name: "NodeJS", type: "devicon" },
  { key: "react", name: "React", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
  { key: "postgresql", name: "PostgresSQL", type: "devicon" },
  { key: "mongodb", name: "MongoDB", type: "devicon" },
  { key: "typescript", name: "TypeScript", type: "devicon" },
  { key: "yarn", name: "NPM", type: "devicon" },
];

const AlfaComunicacao = [
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "html5", name: "HTML5", type: "devicon" },
  { key: "css3", name: "CSS3", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
  { key: "yarn", name: "Yarn", type: "devicon" },
];
