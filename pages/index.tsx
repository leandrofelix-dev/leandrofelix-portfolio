"use client";

import React from "react";
import colors from "../src/content/index/_colors.json";
import TitleIndex from "./title.index";

import dynamic from "next/dynamic";

const Hero = dynamic(() => import("../src/components/sections/index/hero"));
const Looking = dynamic(
  () => import("../src/components/sections/index/looking")
);
const About = dynamic(() => import("../src/components/sections/index/home"));
const Technical = dynamic(
  () => import("../src/components/sections/index/technical")
);
const Career = dynamic(
  () => import("../src/components/sections/index/optional/career")
);
const FeaturedProjects = dynamic(
  () => import("../src/components/sections/projects/featured")
);

const Color = dynamic(() => import("../src/components/utils/page.colors"));

export default function HomePage() {
  return (
    <div>
      <TitleIndex />
      <Color colors={colors} />
      <Hero />
      <Looking />
      <About />
      <FeaturedProjects />
      <Technical />
      <Career />
    </div>
  );
}
