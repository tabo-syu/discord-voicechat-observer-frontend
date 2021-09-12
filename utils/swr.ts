import useSWR from 'swr';
import {
  GuildResponse,
  VoiceChannelResponse,
  UserResponse,
  SessionResponse,
  SessionLogResponse,
} from './types';

const fetcher = (url: string) => fetch(url).then((r) => r.json());
const SWR = <ResponseType>(path: string) => {
  const { data, error } = useSWR(`http://localhost:3001${path}`, fetcher);

  return {
    data: data as ResponseType,
    isLoading: !error && !data,
    isError: error,
  };
};

export const useGuilds = () => SWR<GuildResponse[]>('/guilds');

export const useGuild = (guildId: string) => {
  return SWR<GuildResponse>(`/guilds/${guildId}`);
};

export const useGuildParticipants = (guildId: string) => {
  return SWR<UserResponse[]>(`/guilds/${guildId}/users`);
};

export const useGuildParticipantSessions = (
  guildId: string,
  userId: string
) => {
  return SWR<SessionResponse[]>(`/guilds/${guildId}/users/${userId}/sessions`);
};

export const useVoiceChannels = (guildId: string) => {
  return SWR<VoiceChannelResponse[]>(`/guilds/${guildId}/voiceChannels`);
};

export const useVoiceChannel = (voiceChannelId: string) => {
  return SWR<VoiceChannelResponse>(`/voiceChannels/${voiceChannelId}`);
};

export const useVoiceChannelSessions = (voiceChannelId: string) => {
  return SWR<SessionResponse[]>(`/voiceChannels/${voiceChannelId}/sessions`);
};

export const useVoiceChannelSessionLogs = (voiceChannelId: string) => {
  return SWR<SessionLogResponse[]>(
    `/voiceChannels/${voiceChannelId}/sessionLogs`
  );
};

export const useSession = (sessionId: string) => {
  return SWR<SessionResponse>(`/sessions/${sessionId}`);
};

export const useSessionUsers = (sessionId: string) => {
  return SWR<UserResponse[]>(`/sessions/${sessionId}/users`);
};

export const useSessionSessionLogs = (sessionId: string) => {
  return SWR<SessionLogResponse[][]>(`/sessions/${sessionId}/sessionLogs`);
};

export const useUser = (userId: string) => {
  return SWR<UserResponse>(`/users/${userId}`);
};
