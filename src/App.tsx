import React from "react";
import "./App.css";
import { Toggle } from "aod-dependencies/Toggle";
import { initializeIcons } from "aod-dependencies/@uifabric/icons";
import { Wrapper } from "./AppStyle";
import CustomTextField from "aod-dependencies/TextField/CustomTextField";

initializeIcons();

function App() {
  const [darkMode, setDarkMode] = React.useState<string>("");
  const [disabled, setDisabled] = React.useState<boolean>(false);
  const onChangeMode = () => {
    if (darkMode === "dark") {
      setDarkMode("light");
    }
    if (darkMode !== "dark") {
      setDarkMode("dark");
    }
  };
  const onChangeDisable = () => {
    setDisabled(!disabled);
  };
  return (
    <div className="App">
      <Wrapper theme={darkMode}>
        <div className="toggle-wrapper">
          <Toggle label="Dark mode" onChange={onChangeMode} />
          <Toggle label="Disable" onChange={onChangeDisable} />
        </div>
        <CustomTextField
          label="Standard"
          //   <TextFieldDarkMode>
          darkMode={darkMode}
          //   </TextFieldDarkMode>
          disabled={disabled}
          placeholder="Custom textfield"
          style={{ width: "300px" }}
          // iconProps={{ iconName: "Calendar" }}
        />
        <br />
        <CustomTextField
          label="TextArea"
          multiline
          rows={5}
          //   <TextFieldDarkMode>
          darkMode={darkMode}
          //   </TextFieldDarkMode>
          disabled={disabled}
          placeholder="Custom Text Area"
          style={{ width: "300px" }}
          // iconProps={{ iconName: "Calendar" }}
        />
      </Wrapper>
    </div>
  );
}

export default App;
