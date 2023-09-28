"use client";

import { CustomButtionProps } from "@/types";

const CustomButtion = ({
  title,
  containerStyles,
  handleClick,
}: CustomButtionProps) => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButtion;
