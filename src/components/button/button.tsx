import React from "react";
import { IButton } from "../../interface/interface";
import "./button.scss";

export default function Button({ buttonValue, onClickEvent }: IButton) {
  return (
    <button className="btn" onClick={onClickEvent}>
      {buttonValue}
    </button>
  );
}
