import { Controller, Get, Param } from '@nestjs/common';
import { FilmsService } from './films.service';

@Controller('films')
export class FilmsController {
  constructor(private filmsService: FilmsService) {}

  @Get()
  async getFilmsList() {
    return await this.filmsService.findAllNoSchedule();
  }

  @Get(':id/schedule')
  async getScheduleById(@Param('id') id: string) {
    return await this.filmsService.getSchedule(id);
  }
}
