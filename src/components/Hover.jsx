import { useHover } from "react-aria";
import React from "react";

function Hover(props) {
  let [events, setEvents] = React.useState([]);
  let { hoverProps, isHovered } = useHover({
    onHoverStart: (e) =>
      setEvents((events) => [`hover started with ${e.pointerType}`]),
    onHoverEnd: (e) =>
      setEvents((events) => [`hover ended with ${e.pointerType}`]),
  });

  return (
    <>
      <div {...hoverProps}>{props.children}</div>
      <ul
        style={{
          maxHeight: "200px",
          overflow: "auto",
        }}
      >
        {events.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
    </>
  );
}

export default Hover;

// Path: src\components\Press.jsx
