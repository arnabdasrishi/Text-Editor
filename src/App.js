import "./App.css";
import { Button, Flex, Text } from "@chakra-ui/react";
import TextEditor from "./components/Editor";
import Instructions from "./components/Instructions";


function App() {
  return (
    <div className="App">
      <TextEditor />
      <Instructions />
    </div>
  );
}

export default App;
