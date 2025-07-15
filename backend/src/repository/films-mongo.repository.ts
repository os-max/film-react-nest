import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IFilm } from 'src/schemas/films.schema';

@Injectable()
export class FilmsMongoRepository {
  constructor(@InjectModel('Film') private Film: Model<IFilm>) {}

  findAll() {
    return this.Film.find().exec();
  }

  findAllNoSchedule() {
    return this.Film.find({}, { _id: 0, schedule: 0 }).lean().exec()
  }

  async findScheduleById(id: string) {
    const schedule = await this.Film.findOne({ id }).select('schedule').lean().exec();

    if (schedule)
      return schedule.schedule
  }

  async reserveSeats(filmId: string, sessionId: string, seat: string) {
    return await this.Film.findOneAndUpdate(
      { id: filmId, 'schedule.id': sessionId },
      {
        $push: {
          'schedule.$.taken': seat,
        },
      },
    ).exec();
  }
}
