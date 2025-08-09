import { Test, TestingModule } from '@nestjs/testing';
import { FilmsPgRepository } from './films-pg.repository';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Film } from '../films/entities/films.entity';
import { Schedule } from '../films/entities/schedule.entity';

describe('FilmsPgRepository', () => {
  let provider: FilmsPgRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FilmsPgRepository,
        {
          provide: getRepositoryToken(Film),
          useValue: {},
        },
        {
          provide: getRepositoryToken(Schedule),
          useValue: {},
        },
      ],
    }).compile();

    provider = module.get<FilmsPgRepository>(FilmsPgRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
