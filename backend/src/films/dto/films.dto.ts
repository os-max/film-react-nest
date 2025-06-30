import {
  IsArray,
  IsFQDN,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { getScheduleDTO } from './schedule.dto';
import { Type } from 'class-transformer';

/* export class createFilmDTO {
    @IsNumber()
    rating: number;
    @IsString()
    director: string;
    @IsArray()
    tags: string[];
    @IsFQDN()
    image: string;  
    @IsFQDN()
    cover: string;
    @IsString()
    title: string;
    @IsString()
    about: string;
    @IsString()
    description: string;
    @IsNotEmpty()
    schedule: getScheduleDTO[];
} */

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
