import React from 'react';
import { Box, List, ListItem } from '@chakra-ui/layout';
import GuildIcon from './GuildIcon';
import { Avatar } from '@chakra-ui/avatar';
import { useGuilds } from '../utils/swr';

const GuildsMenu: React.VFC = () => {
  const guilds = useGuilds();

  if (guilds.isLoading) {
    return (
      <Box padding='3'>
        <Avatar isLoading={guilds.isLoading} />
      </Box>
    );
  }

  return (
    <Box padding='3'>
      <List>
        <ListItem></ListItem>
        {guilds.data.map((guild) => (
          <ListItem key={guild.id}>
            <GuildIcon guild={guild} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default GuildsMenu;
