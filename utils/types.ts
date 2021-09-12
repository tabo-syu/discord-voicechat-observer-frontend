export type GuildResponse = {
  id: string;
  name: string;
  iconUrl: string;
};

export type VoiceChannelResponse = {
  id: string;
  name: string;
  guildId: string;
  participants: UserResponse[];
  updatedAt: Date;
};

export type UserResponse = {
  id: string;
  voiceChannelId: string | null;
  username: string;
  avatarUrl: string;
};

export type SessionResponse = {
  id: string;
  voiceChannelId: string;
  startedAt: string;
  endedAt: string;
};

export type SessionLogResponse = {
  id: string;
  sessionId: string;
  userId: string;
  action: 'joined' | 'left';
  createdAt: string;
  username: UserResponse['username'];
  avatarUrl: UserResponse['avatarUrl'];
  leftAt: string;
};
