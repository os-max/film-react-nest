import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';

import { getFilmDTO } from './dto/films.dto';
import { getScheduleDTO } from './dto/schedule.dto';

@Injectable()
export class FilmsService {
  constructor(@Inject('FilmsRepository') private filmsRepository) {}

  async findAllNoSchedule() {
    const films = await this.filmsRepository.findAllNoSchedule();

    const responseObj = {
      total: films.length,
      items: plainToInstance(getFilmDTO, films),
    };

    return responseObj;
  }

  async getSchedule(id: string) {
    const schedule = await this.filmsRepository.findScheduleById(id);

    if (!schedule || schedule.length === 0) {
      throw new NotFoundException('No sessions or film with this id');
    }
    return {
      total: schedule.length,
      items: plainToInstance(getScheduleDTO, schedule),
    };
  }
}
