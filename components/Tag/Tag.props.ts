import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface PProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: "small" | "middle";
  color?: "ghost" | "red" | "gray" | "green" | "primary";
  href?: string;
  children: ReactNode;
}
