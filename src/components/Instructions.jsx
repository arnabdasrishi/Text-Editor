import { Box, Heading, ListItem, OrderedList } from "@chakra-ui/react";
import React from "react";
import "../App.css";

const Instructions = () => {
  return (
    <Box className="instuctions__main">
      <Heading size="md" style={{ marginBottom: "1rem", textAlign: "center" }}>
        Instuctions:
      </Heading>

      <OrderedList style={{ color: "black", textAlign: "center" }}>
        <ListItem>Type "*" and "space" "space" for bold text</ListItem>
        <ListItem>
          Type "**" and "space" and "space" for Red color text
        </ListItem>
        <ListItem>Type "***" and "space" "space" for underline text</ListItem>
        <ListItem>Remove all text for reseting all styles</ListItem>
      </OrderedList>
    </Box>
  );
};

export default Instructions;
