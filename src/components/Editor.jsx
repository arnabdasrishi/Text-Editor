import React from "react";
import { Editor, EditorState, RichUtils, Modifier } from "draft-js";
import "draft-js/dist/Draft.css";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

// Look and feel of the editor
const editorStyle = {
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  borderRadius: "10px",
  cursor: "text",
  width: "70%",
  height: "25rem",
  margin: "auto",
  padding: "1rem",
  marginTop: "2rem",
  backgroundColor: "#fffcd9",
  fontFamily:"cursive",
};

const styleMap = {
  RED: {
    color: "red",
  },
  UNDERLINE: {
    textDecoration: "underline",
  },
};

export default function TextEditor() {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );

  const [activeStyle, setActiveStyle] = React.useState(null);

  const editor = React.useRef(null);

  function focusEditor() {
    editor.current.focus();
  }

  function handleChange(newEditorState) {
    const contentState = newEditorState.getCurrentContent();
    const selectionState = newEditorState.getSelection();
    const block = contentState.getBlockForKey(selectionState.getStartKey());
    const text = block.getText();

    if (text.startsWith("* ")) {
      // Apply bold style to line
      setActiveStyle("BOLD");
    } else if (text.startsWith("** ")) {
      // Apply red color to line
      setActiveStyle("RED");
    } else if (text.startsWith("*** ")) {
      // Apply underline to line
      setActiveStyle("UNDERLINE");
    } else {
      setActiveStyle(null);
    }

    if (activeStyle) {
      newEditorState = RichUtils.toggleInlineStyle(newEditorState, activeStyle);
    }

    if (
      text.startsWith("* ") ||
      text.startsWith("** ") ||
      text.startsWith("*** ")
    ) {
      newEditorState = removeTriggerCharacter(
        newEditorState,
        text.substring(0, 3)
      );
    }

    setEditorState(newEditorState);
  }

  function removeTriggerCharacter(newEditorState, trigger) {
    const contentState = newEditorState.getCurrentContent();
    const selectionState = newEditorState.getSelection();
    const block = contentState.getBlockForKey(selectionState.getStartKey());

    let newContentState = Modifier.replaceText(
      contentState,
      selectionState.merge({
        anchorOffset: 0,
        focusOffset: trigger.length,
      }),
      " "
    );

    newEditorState = EditorState.push(
      newEditorState,
      newContentState,
      "remove-range"
    );

    newContentState = Modifier.removeRange(
      newContentState,
      selectionState.merge({
        anchorOffset: 0,
        focusOffset: 1,
      }),
      "backward"
    );

    return EditorState.push(newEditorState, newContentState, "remove-range");
  }

  return (
    <>
      {/* Header Section */}
      <Flex
        className="header__main"
        align="center"
        justify="center"
        gap="20rem"
        padding="0.5rem 0"
      >
        <Text>Demo Editor by Arnab</Text>
        <Button size="md" colorScheme="yellow">
          Save
        </Button>
      </Flex>
      <Box style={editorStyle} onClick={focusEditor}>
        <Editor
          ref={editor}
          editorState={editorState}
          onChange={handleChange}
          placeholder="Write something!"
          customStyleMap={styleMap}
        />
      </Box>
    </>
  );
}
