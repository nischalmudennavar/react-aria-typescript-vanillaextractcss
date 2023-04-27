import React, { useRef } from "react";
import { useButton } from "react-aria";
import { button } from "../styles/App.css";

const Button = (props: any) => {
  let ref = useRef(null);
  let { buttonProps, isPressed } = useButton(props, ref);
  // destructuring the props

  return (
    <button {...buttonProps} ref={ref} className={button}>
      {props.children}
      {/* {isPressed ? " Pressed" : ""} */}
    </button>
  );
};

export default Button;
