import React, { FC } from "react";

type Props = {
  benefits: { title: string }[];
  setBenefits: (benefits: { title: string }[]) => void;
  prerequisites: { title: string }[];
  setPrerequisities: (prerequisites: { title: string }[]) => void;
  active: number;
  setActive: (active: number) => void;
};

const CourseData: FC<Props> = ({
  benefits,
  setBenefits,
  setPrerequisities,
  prerequisites,
  active,
  setActive,
}) => {
  return <div></div>;
};

export default CourseData;
