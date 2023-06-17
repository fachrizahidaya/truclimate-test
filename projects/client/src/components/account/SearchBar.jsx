import {  Input } from "@chakra-ui/react";
import React from "react";

export const SearchBar = () => {
  return (
    <div>
      <Input
        borderRadius={"30px"}
        variant={"solid"}
        bgColor={"gray.100"}
        placeholder="Search Twitter"
      />
    </div>
  );
};
