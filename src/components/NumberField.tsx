import { useNumberFieldState } from "react-stately";
import { useLocale, useNumberField } from "react-aria";
import React from "react";

// Reuse the Button from your component library. See below for details.
import Button from "./Button";

function NumberField(props: any) {
  let { locale } = useLocale();
  let state = useNumberFieldState({ ...props, locale });
  let inputRef = React.useRef(null);
  let {
    labelProps,
    groupProps,
    inputProps,
    incrementButtonProps,
    decrementButtonProps,
  } = useNumberField(props, state, inputRef);

  return (
    <div>
      <label {...labelProps}>{props.label}</label>
      <div {...groupProps}>
        <Button {...decrementButtonProps}>-</Button>
        <input {...inputProps} ref={inputRef} />
        <Button {...incrementButtonProps}>+</Button>
      </div>
    </div>
  );
}

export default NumberField;
