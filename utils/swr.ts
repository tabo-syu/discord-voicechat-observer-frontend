import useSWR from 'swr';
import { GuildResponse, VoiceChannelResponse, UserResponse } from './types';

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
  const { data, error } = useSWR(`${domain}/guilds/${guildId}/participants`);

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
