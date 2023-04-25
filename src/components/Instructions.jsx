import { Box, Heading, ListItem, OrderedList } from "@chakra-ui/react";
import React from "react";
import "../App.css";

const Instructions = () => {
  return (
    <Box className="instuctions__main">
      <Heading size="md" style={{ marginBottom: "1rem", textAlign: "center", fontStyle:"italic" }}>
        -:: Instuctions ::-
      </Heading>

      <OrderedList style={{ color: "black", textAlign: "center" }}>
        <ListItem>Type "<b>*</b>" and "<b>space</b>" and "<b>space</b>" for <b>bold text</b></ListItem>
        <ListItem>
          Type "<b>**</b>" and "<b>space</b>" and "<b>space</b>" for <span style={{color:"red"}}>Red color text</span>
        </ListItem>
        <ListItem>Type "<b>***</b>" and "<b>space</b>" "<b>space</b>" for <u>underline text</u></ListItem>
        <ListItem>Remove all text for reseting all styles</ListItem>
      </OrderedList>
    </Box>
  );
};

export default Instructions;
