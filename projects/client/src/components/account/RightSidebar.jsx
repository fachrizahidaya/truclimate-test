import { Stack, Wrap } from "@chakra-ui/react";
import React from "react";
import { SearchBar } from "./SearchBar";

export const RightSidebar = () => {
  return (
    <>
      <Stack ml={"10px"}>
        <SearchBar />

        <Wrap></Wrap>
        <Wrap></Wrap>
      </Stack>
    </>
  );
};
