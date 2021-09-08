import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Avatar,
  LinkBox,
  LinkOverlay,
  AvatarGroup,
} from '@chakra-ui/react';
import Link from 'next/link';
import { SessionResponse } from '../utils/types';
import { useSessionUsers } from '../utils/swr';

type CellProps = { sessionId: string };
const SessionUsersIcon: React.VFC<CellProps> = (props) => {
  const users = useSessionUsers(props.sessionId);

  return (
    <AvatarGroup size='md' max={10}>
      {users.isLoading ? (
        <></>
      ) : (
        users.data.map((user) => (
          <Avatar key={user.id} name={user.username} src={user.avatarUrl} />
        ))
      )}
    </AvatarGroup>
  );
};

type TableProps = { sessions: SessionResponse[]; isLoading: boolean };
const SessionsTable: React.VFC<TableProps> = (props) => {
  if (props.isLoading) {
    return <></>;
  }

  return (
    <Table variant='simple'>
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>開始時刻</Th>
          <Th>終了時刻</Th>
          <Th>参加者</Th>
        </Tr>
      </Thead>
      <Tbody>
        {props.sessions.map((session, index) => {
          return (
            <LinkBox
              as={Tr}
              key={session.id}
              _hover={{ backgroundColor: 'whiteAlpha.200' }}
              transitionDuration='normal'
            >
              <Td>{index + 1}</Td>
              <Td>
                <Link href={`/sessions/${session.id}`} passHref>
                  <LinkOverlay>{session.startedAt}</LinkOverlay>
                </Link>
              </Td>
              <Td>
                <Link href={`/sessions/${session.id}`} passHref>
                  <LinkOverlay>{session.endedAt}</LinkOverlay>
                </Link>
              </Td>
              <Td>
                <Link href={`/sessions/${session.id}`} passHref>
                  <LinkOverlay>
                    <SessionUsersIcon sessionId={session.id} />
                  </LinkOverlay>
                </Link>
              </Td>
            </LinkBox>
          );
        })}
      </Tbody>
    </Table>
  );
};

export default SessionsTable;
