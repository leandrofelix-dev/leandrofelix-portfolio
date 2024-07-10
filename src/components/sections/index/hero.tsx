// @ts-nocheck

import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { FaCode, FaLinkedinIn } from "react-icons/fa";
import Section from "../../structure/section";
import Container from "../../structure/container";
import Image from "next/image";
import space from "../../utils/spacing";
import HeroBg from "../../blocks/hero.bg/section-bg-color";
import hero from "../../../styles/scss/sections/index/hero.module.scss";
import button from "../../../styles/scss/blocks/button.module.scss";
import content from "../../../content/index/hero.json";

export default function Hero() {
  const [, setTypingStatus] = useState("Initializing");
  const [isImageHovered, setIsImageHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsImageHovered(true);
  };

  const handleMouseLeave = () => {
    setIsImageHovered(false);
  };

  return (
    <Section classProp={`${hero.section}`}>
      <Container spacing={"VerticalXXXL"}>
        <div style={{ position: "relative", gap: "4rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div
            className={hero.imageWrapper}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src="/img/picture.jpeg"
              width={500}
              height={800}
              alt="Leandro Felix"
              loading="eager"
              style={{
                filter: "grayscale(100%)",
              }}
            />
            <div
              className={`${hero.imageShadow} ${
                isImageHovered ? hero.imageShadowHovered : ""
              }`}
            />
          </div>
          <div className={hero.textWrapper}>
            <div style={{ display: "flex", gap: ".8rem", alignItems: "center" }}>
              <span className={hero.emoji}>👋</span>
              <TypeAnimation
                className={`${hero.preHeader}`}
                sequence={[
                  content.intro.startDelay,
                  () => {
                    setTypingStatus("typing");
                  },
                  content.intro.start,
                  () => {
                    setTypingStatus("typed");
                  },
                  content.intro.deleteDelay,
                  () => {
                    setTypingStatus("deleting");
                  },
                  content.intro.end,
                  () => {
                    setTypingStatus("deleted");
                  },
                  content.intro.restartDelay,
                ]}
                speed={content.intro.speed}
                deletionSpeed={content.intro.deletionSpeed}
                wrapper={content.intro.wrapper}
                repeat={Infinity}
              />
            </div>
            <section>
              <h1 className={hero.header}>{content.header.name}</h1>
              <h1 className={`${hero.header} ${hero.primaryDim}`}>
                {content.header.usp}
              </h1>
            </section>
            <section>
              <p
                className={`${hero.primaryBright} subtitle ${space([
                  "verticalLrg",
                ])}`}
              >
                {content.paragraph}
              </p>
            </section>
            <section style={{ position: "relative", display: "flex", justifyContent: "center" }}>
              <button
                className={`button ${button.primary}`}
                onClick={() => (window.location = "/projects")}
              >
                <FaCode />
                {content.buttons.primary.title}
              </button>
              <button
                className={`button ${button.secondary} leaveSite`}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/leandrofelixdev/",
                    "_blank"
                  )
                }
              >
                <FaLinkedinIn />
                {content.buttons.secondary.title}
              </button>
            </section>
          </div>
        </div>
      </Container>
      <HeroBg theme="bg-color-1" />
    </Section>
  );
}
