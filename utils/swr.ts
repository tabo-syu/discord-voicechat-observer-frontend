import useSWR from 'swr';
import {
  GuildResponse,
  VoiceChannelResponse,
  UserResponse,
  SessionResponse,
  SessionLogResponse,
} from './types';

const domain = 'http://localhost:3001';
const fetcher = (url: string) => fetch(url).then((r) => r.json());

export const useGuilds = () => {
  const { data, error } = useSWR(`${domain}/guilds`, fetcher);

  return {
    data: data as GuildResponse[],
    isLoading: !error && !data,
    isError: error,
  };
};

export const useGuild = (guildId: string) => {
  const { data, error } = useSWR(`${domain}/guilds/${guildId}`);

  return {
    data: data as GuildResponse,
    isLoading: !error && !data,
    isError: error,
  };
};

export const useGuildParticipants = (guildId: string) => {
  const { data, error } = useSWR(`${domain}/guilds/${guildId}/users`);

  return {
    data: data as UserResponse[],
    isLoading: !error && !data,
    isError: error,
  };
};

export const useVoiceChannels = (guildId: string) => {
  const { data, error } = useSWR(
    `${domain}/guilds/${guildId}/voiceChannels`,
    fetcher
  );

  return {
    data: data as VoiceChannelResponse[],
    isLoading: !error && !data,
    isError: error,
  };
};

export const useVoiceChannel = (voiceChannelId: string) => {
  const { data, error } = useSWR(
    `${domain}/voiceChannels/${voiceChannelId}`,
    fetcher
  );

  return {
    data: data as VoiceChannelResponse,
    isLoading: !error && !data,
    isError: error,
  };
};

export const useVoiceChannelSessions = (voiceChannelId: string) => {
  const { data, error } = useSWR(
    `${domain}/voiceChannels/${voiceChannelId}/sessions`,
    fetcher
  );

  return {
    data: data as SessionResponse[],
    isLoading: !error && !data,
    isError: error,
  };
};

export const useVoiceChannelSessionLogs = (voiceChannelId: string) => {
  const { data, error } = useSWR(
    `${domain}/voiceChannels/${voiceChannelId}/sessionLogs`,
    fetcher
  );

  return {
    data: data as SessionLogResponse[],
    isLoading: !error && !data,
    isError: error,
  };
};

export const useSessionUsers = (sessionId: string) => {
  const { data, error } = useSWR(
    `${domain}/sessions/${sessionId}/users`,
    fetcher
  );

  return {
    data: data as UserResponse[],
    isLoading: !error && !data,
    isError: error,
  };
};
