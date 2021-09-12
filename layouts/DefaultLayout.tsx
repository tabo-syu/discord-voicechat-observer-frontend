import React from 'react';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import GlobalFooter from '../components/GlobalFooter';
import GuildsMenu from '../components/GuildsMenu';

type Props = {
  children: React.ReactNode;
};
const Layout: React.VFC<Props> = (props) => {
  return (
    <Grid height='100vh' templateRows='1fr' templateColumns='72px auto'>
      <GridItem rowSpan={2} backgroundColor='gray.900'>
        <GuildsMenu />
      </GridItem>
      <GridItem backgroundColor='gray.800'>
        <Box as='main' height='100%'>
          {props.children}
        </Box>
      </GridItem>
      <GridItem backgroundColor='gray.900'>
        <GlobalFooter />
      </GridItem>
    </Grid>
  );
};

export default Layout;
