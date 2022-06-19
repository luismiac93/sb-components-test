/// <reference types="react" />
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
export declare const MyLabel: ({ label, size, color, allCaps, fontColor, }: MyLabelProps) => JSX.Element;
