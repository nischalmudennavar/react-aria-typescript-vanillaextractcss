import React, { useState } from "react";
import Button from "./components/Button";

import { flex, colorVariant } from "./styles/App.css";
import { dark, light } from "./styles/vars.css";
import Focus from "./components/Focus";
import PropDril from "./components/PropDrils/PropDril";
import Checkbox from "./components/CheckBox";
import Draggable from "./components/DragnDrop";
import List from "./components/Lists/List";
import Hover from "./components/Hover";
import NumberField from "./components/NumberField";

const App = () => {
  const [theme, setTheme] = useState(true); //boolean

  const [name, setName] = useState("");

  const handleTheme = () => {
    setTheme(!theme);
  };

  const handleName = () => {
    setName("Nischal");
  };

  return (
    <>
      <div className={theme ? dark : light}>
        <div className={flex}>
          App
          {/* <button onClick={handleTheme} className={button}>
            Toggle Theme ✨
          </button> */}
          <Hover>
            <Button onPress={handleTheme}>
              Toggle theme ~ {theme ? " to Light 🌞" : " to Dark 🌙"}
             
            </Button>
           
            <Checkbox>Unsubscribe</Checkbox>;<h1>Nischal</h1>
          </Hover>
          {/* <StyledComponent color="primary" />
          <Focus />
          <PropDril name={handleName} title={name} />
          <Draggable />
          <List />
          <NumberField
            label="Price"
            defaultValue={1}
            formatOptions={{
              style: "currency",
              currency: "USD",
            }}
          /> */}
          {/* <div className={localVarStyle}></div> */}
        </div>
      </div>
    </>
  );
};

interface StyledComponentProps {
  color: keyof typeof colorVariant;
}

const StyledComponent = (props: StyledComponentProps) => {
  return (
    <div>
      <div className={colorVariant[props.color]}>style</div>
    </div>
  );
};

export default App;

<main>
  <div>
    <h2></h2>
    <p></p>
  </div>
</main>;
