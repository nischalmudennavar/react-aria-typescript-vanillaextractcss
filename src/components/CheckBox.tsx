import { useToggleState } from "react-stately";
import { useCheckbox } from "react-aria";
import React from "react";

function Checkbox(props: any) {
  let { children } = props;
  let state = useToggleState(props);
  let ref = React.useRef(null);
  let { inputProps } = useCheckbox(props, state, ref);

  return (
    <label style={{ display: "block" }}>
      <input {...inputProps} ref={ref} />
      {children}
    </label>
  );
}

export default Checkbox;
