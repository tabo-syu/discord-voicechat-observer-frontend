import React from 'react';
import { Box } from '@chakra-ui/react';
import MainContentHeader from '../components/MainContentHeader';
import { MdPerson } from 'react-icons/md';
import { useUser } from '../utils/swr';

type Props = {
  userId: string;
  children: React.ReactNode;
};
const Layout: React.VFC<Props> = (props) => {
  const user = useUser(props.userId);

  return (
    <>
      <MainContentHeader icon={MdPerson} isLoading={user.isLoading}>
        {user.data?.username ?? ''}
      </MainContentHeader>
      <Box padding='3'>{props.children}</Box>
    </>
  );
};

export default Layout;
