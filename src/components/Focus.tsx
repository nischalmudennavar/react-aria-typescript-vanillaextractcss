import { useFocus } from "react-aria";
import React, { useState } from "react";
import { textField } from "./../styles/App.css";

const Focus = () => {
  let [events, setEvents] = useState<string[]>([]);
  let { focusProps } = useFocus({
    onFocus: (e) => {
      setEvents(["onFocus"]);
    },
    onFocusChange: (isFocused) =>
      setEvents((events) => [`focused: ${isFocused}`]),
  });
  return (
    <div>
      <input {...focusProps} className={textField} />
      {events.map((event, i) => (
        <div key={i}>{event}</div>
      ))}
    </div>
  );
};

export default Focus;
