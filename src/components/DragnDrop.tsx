import { useDrag } from "react-aria";

function Draggable() {
  let { dragProps, isDragging } = useDrag({
    getItems() {
      return [
        {
          "text/plain": "hello world",
        },
      ];
    },
  });

  return (
    <div
      {...dragProps}
      role="button"
      tabIndex={0}
      className={`draggable ${isDragging ? "dragging" : ""}`}
    >
      Drag me
    </div>
  );
}


export default Draggable;

