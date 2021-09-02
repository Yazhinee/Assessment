export const FileStatus = {
  Available: 'available' as 'available',
  Scheduled: 'scheduled' as 'scheduled'
};

export type FileStatus = (typeof FileStatus)[keyof typeof FileStatus];