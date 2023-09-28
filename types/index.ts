import { MouseEventHandler } from "react";

export interface CustomButtionProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
