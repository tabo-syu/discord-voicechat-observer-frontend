import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Avatar,
  AvatarGroup,
} from '@chakra-ui/react';
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

type TableProps = { sessions: SessionResponse[] };
const SessionsTable: React.VFC<TableProps> = (props) => {
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
            <Tr key={session.id}>
              <Td>{index + 1}</Td>
              <Td>{session.startedAt}</Td>
              <Td>{session.endedAt}</Td>
              <Td>
                <SessionUsersIcon sessionId={session.id} />
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

export default SessionsTable;
