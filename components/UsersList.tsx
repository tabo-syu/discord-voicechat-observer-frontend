import React from 'react';
import Link from 'next/link';
import {
  Avatar,
  Button,
  Link as ChakraLink,
  Stack,
  Text,
} from '@chakra-ui/react';
import { UserResponse } from '../utils/types';

type Props = {
  users: UserResponse[];
  isLoading: boolean;
};
const UsersList: React.VFC<Props> = (props) => {
  if (props.isLoading) {
    return <></>;
  }

  return (
    <Stack spacing='0.5'>
      <Text marginBottom='1' fontSize='xs' fontWeight='bold'>
        USERS
      </Text>
      {props.users.map((user) => (
        <ChakraLink
          key={user.id}
          as={Link}
          href={`/users/${user.id}`}
          passHref
          marginTop='1'
        >
          <Button
            as='a'
            justifyContent='flex-start'
            variant='ghost'
            isFullWidth={true}
            size='sm'
            paddingLeft='1'
            height='10'
          >
            <Avatar
              size='sm'
              src={user.avatarUrl}
              name={user.username}
              marginRight='3'
            />
            {user.username}
          </Button>
        </ChakraLink>
      ))}
    </Stack>
  );
};

export default UsersList;
