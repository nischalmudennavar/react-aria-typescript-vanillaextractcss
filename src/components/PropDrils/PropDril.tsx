import PropDrileTwo from "./PropDrileTwo";
// eslint-disable-next-line
const PropDril = (props: { name: Function; title: string }) => {
  return (
    <div>
      <PropDrileTwo name={props.name} title={props.title} />
    </div>
  );
};

export default PropDril;
