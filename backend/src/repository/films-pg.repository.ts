import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Film } from 'src/films/entities/films.entity';
import { Schedule } from 'src/films/entities/schedule.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FilmsPgRepository {
  constructor(
    @InjectRepository(Film) private Film: Repository<Film>,
    @InjectRepository(Schedule) private Schedule: Repository<Schedule>,
  ) {}

  findAll() {
    return this.Film.find();
  }

  findAllNoSchedule() {
    return this.Film.find();
  }

  findScheduleById(filmId: string) {
    return this.Schedule.find({
      where: { filmId },
      order: { daytime: 'ASC' },
    });
  }

  async reserveSeats(filmId: string, sessionId: string, seat: string) {
    const schedule = await this.Schedule.findOne({
      where: { filmId, id: sessionId },
    });
    schedule.taken.push(seat);
    return this.Schedule.save(schedule);
  }
}
