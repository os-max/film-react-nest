import { getScheduleDTO } from './schedule.dto';

export class getFilmDTO {
  rating: number;
  director: string;
  tags: string[];
  image: string;
  cover: string;
  title: string;
  about: string;
  description: string;
  schedule: getScheduleDTO[];
}
