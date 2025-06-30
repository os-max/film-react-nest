import { HttpException, Injectable } from '@nestjs/common';
import { FilmsRepository } from 'src/repository/films.repository';

@Injectable()
export class FilmsService {
  constructor(private filmsRepository: FilmsRepository) {}

  async findAllNoSchedule() {
    const films = await this.filmsRepository.findAllNoSchedule();

    const responseObj = {
      total: films.length,
      items: films,
    };

    return responseObj;
  }

  async getSchedule(id: string) {
    const { schedule } = await this.filmsRepository.findScheduleById(id);

    if (!schedule) {
      throw new HttpException('No film with this id', 404);
    }
    return {
      total: schedule.length,
      items: schedule,
    };
  }
}
