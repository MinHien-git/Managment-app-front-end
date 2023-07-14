import React, { ReactNode } from "react";
import "./Main.scss";
import { IMain } from "../../interface/interface";

export default function Main({ children }: IMain) {
  return <main className="primary-main">{children}</main>;
}
