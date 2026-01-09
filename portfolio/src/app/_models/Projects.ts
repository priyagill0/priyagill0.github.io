// this structure will be used in project-card.component.ts
import { Tag } from './Tag';

// media type
export type MediaItem =
  | {
      type: 'image';
      src: string;
      alt?: string;
    }
  | {
      type: 'video';
      src: string;
      poster?: string;
    };

export interface Project {
  id: number;
  name: string;
  summary: string;
  description: string;
  projectLink?: string; // GitHub
  publicUrl?: string;
  media: MediaItem[];
  tags: Tag[];
}
