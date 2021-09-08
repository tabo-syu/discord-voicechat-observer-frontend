import React from 'react';
import { Box } from '@chakra-ui/react';

type Props = {
  children: React.ReactNode;
};
const SideNav: React.VFC<Props> = (props) => {
  return (
    <Box width='60' height='100%' backgroundColor='gray.700'>
      {props.children}
    </Box>
  );
};

export default SideNav;
