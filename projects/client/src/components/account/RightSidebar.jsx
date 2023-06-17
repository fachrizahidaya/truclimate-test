import { Heading, Stack, Text, Wrap } from '@chakra-ui/react'
import React from 'react'

export const RightSidebar = () => {
  return (
    <>
<Stack ml={"10px"}>
        <Heading>New To Twitter?</Heading>
        
        <Wrap>
          
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
  )
}
