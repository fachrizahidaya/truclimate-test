import { Heading, Stack, Text, Wrap } from "@chakra-ui/react";
import React from "react";
import { ButtonRegister1 } from "./ButtonRegister1";

export const RightSidebar = () => {
  return (
    <>
      <Stack ml={"10px"}>
        <Heading>New To Twitter?</Heading>
        <ButtonRegister1 />
        <Wrap>
          By signing up, you agree to the Terms of Service and Privacy Policy,
          including Cookie Use.
        </Wrap>
        <Wrap>
          <Text>Terms of Service</Text>
          <Text>Privacy Policy</Text>
          <Text>Cookie Policy</Text>
          <Text>Acessibility</Text>
          <Text>Ads Info</Text>
          <Text>© 2023 X Corp.</Text>
        </Wrap>
      </Stack>
    </>
  );
};
