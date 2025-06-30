import { Exclude, Type } from 'class-transformer';
import { IsArray, IsNumber, IsString } from 'class-validator';

/* export class createScheduleDTO {
    @IsString()
    id: string;
    @IsString()
    daytime: string;
    @IsString()
    hall: string;
    @IsNumber()
    rows: number;
    @IsNumber()
    seats: number;
    @IsNumber()
    price: number;
    @IsArray()
    taken: string[];
} */

export class Schedule {
  id: string;
  daytime: string;
  hall: string;
  rows: number;
  seats: number;
  price: number;
  taken: string[];
}

export class getScheduleDTO {
  @Type(() => Schedule)
  items: Schedule[];
}
