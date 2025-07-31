import React, { ReactNode } from "react";
import Spacing from "../utils/spacing";

interface ContainerProps {
  classProp?: string;
  spacing: string[];
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({
  classProp,
  spacing,
  children,
}) => {
  const _class = classProp || "";

  return (
    <div className={`w-full max-w-reading mx-auto flex flex-col mobile:w-[calc(100%-2rem)] mobile:mx-4 ${_class} ${Spacing(spacing)}`}>
      {children}
    </div>
  );
};

export default Container;
