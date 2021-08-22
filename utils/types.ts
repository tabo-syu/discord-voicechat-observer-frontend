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
