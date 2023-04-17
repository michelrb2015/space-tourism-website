import { ImageFormat } from './image.interface';

export type Role =
  | 'Commander'
  | 'Mission Specialist'
  | 'Pilot'
  | 'Flight Engineer';

export interface Crew {
  name: string;
  images: ImageFormat;
  role: Role;
  bio: string;
}
