import { Test, TestingModule } from '@nestjs/testing';
import { FilmsService } from './films.service';

describe('FilmsService', () => {
  let service: FilmsService;

  const testData = [
    {
      id: '0e33c7f6-27a7-4aa0-8e61-65d7e5effecf',
      rating: 5,
      director: 'test director',
      tags: ['test tag'],
      image: '/bg1s.jpg',
      cover: '/bg1c.jpg',
      title: 'test title',
      about: 'test about',
      description: 'test description',
      schedule: [
        {
          id: 'f2e429b0-685d-41f8-a8cd-1d8cb63b99ce',
          daytime: '2024-06-28T10:00:53+03:00',
          hall: 0,
          rows: 5,
          seats: 10,
          price: 350,
          taken: ['1:2', '1:5', '1:3'],
        },
      ],
    },
  ];

  const mockFilmsRepository = {
    findAllNoSchedule: () => {
      return testData.map((film) => {
        /* eslint-disable-next-line */
        const { schedule, ...dataNoSchedule } = film;
        return dataNoSchedule;
      });
    },
    findScheduleById: (id) => {
      return testData.find((film) => film.id === id).schedule;
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FilmsService,
        {
          provide: 'FilmsRepository',
          useValue: mockFilmsRepository,
        },
      ],
    }).compile();

    service = module.get<FilmsService>(FilmsService);
  });

  it('should return all films', async () => {
    const films = await service.findAllNoSchedule();

    expect(films).toEqual({
      items: [
        {
          id: '0e33c7f6-27a7-4aa0-8e61-65d7e5effecf',
          rating: 5,
          director: 'test director',
          tags: ['test tag'],
          image: '/bg1s.jpg',
          cover: '/bg1c.jpg',
          title: 'test title',
          about: 'test about',
          description: 'test description',
        },
      ],
      total: 1,
    });
  });

  it('should return film schedule', async () => {
    const filmSchedule = await service.getSchedule(
      '0e33c7f6-27a7-4aa0-8e61-65d7e5effecf',
    );

    expect(filmSchedule).toEqual({
      items: [
        {
          id: 'f2e429b0-685d-41f8-a8cd-1d8cb63b99ce',
          daytime: '2024-06-28T10:00:53+03:00',
          hall: 0,
          rows: 5,
          seats: 10,
          price: 350,
          taken: ['1:2', '1:5', '1:3'],
        },
      ],
      total: 1,
    });
  });
});
