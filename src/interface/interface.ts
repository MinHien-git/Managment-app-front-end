import { HtmlHTMLAttributes, ReactNode } from "react";

export interface IButton {
  buttonValue: string;
  onClickEvent?: React.MouseEventHandler<any> | undefined;
}
export interface IFooter {}

export interface IMain {
  children?: ReactNode | string | undefined;
}
