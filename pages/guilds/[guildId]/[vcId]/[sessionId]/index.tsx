import { Box, Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import SideNav from '../../../../../components/SideNav';
import UserActiveChart from '../../../../../components/UserActiveChart';

const Guilds = () => {
  return (
    <Flex height='100%'>
      <Box flexShrink={0}>
        <SideNav>
          <Box marginY='5' paddingLeft='3' paddingRight='3'></Box>
          <Box marginY='5' paddingLeft='3' paddingRight='3'></Box>
        </SideNav>
      </Box>
      <Box flexGrow={1}>
        <UserActiveChart />
      </Box>
    </Flex>
  );
};
export default Guilds;
