import React from "react";

import "./mylabel.css";

export interface MyLabelProps {
  /**
   * This is a name of the label
   */
  label: string;
  /**
   * This is a size of the label
   */
  size: "normal" | "h1" | "h2" | "h3";
  /**
   * The label is or not capitalize
   */
  allCaps: boolean;
  /**
   * This is a text color of label
   */
  color: "primary" | "secondary" | "tertiary";
  /**
   * This is a custom text color of label
   */
  fontColor: string;
}

export const MyLabel = ({
  label = "No Label",
  size = "normal",
  color = "primary",
  allCaps = false,
  fontColor,
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size}  text-${color}`}
      style={{ color: fontColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
