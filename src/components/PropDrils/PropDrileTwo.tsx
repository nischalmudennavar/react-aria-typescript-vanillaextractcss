import Button from "../Button";

interface Props {
  name: Function;
  title: string;
}
const PropDrileTwo = (props: Props) => {
  return <Button onPress={props.name}> setName {props.title} </Button>;
};

export default PropDrileTwo;
