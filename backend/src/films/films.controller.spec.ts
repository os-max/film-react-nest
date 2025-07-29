import { Test, TestingModule } from '@nestjs/testing';
import { FilmsController } from './films.controller';
import { FilmsService } from './films.service';

describe('FilmsController', () => {
  let controller: FilmsController;
  let service: FilmsService

  const mockFilmsService = {
    findAllNoSchedule: jest.fn(),
    getSchedule: jest.fn()
  }

  beforeEach(async () => {

    const module: TestingModule = await Test.createTestingModule({
      controllers: [FilmsController],
      providers: [{
        provide: FilmsService,
        useValue: mockFilmsService
      }]
    }).compile();

    controller = module.get<FilmsController>(FilmsController);
    service = module.get<FilmsService>(FilmsService);
  });

  it('should call findAllNoSchedule', async () => {

    jest.spyOn(service, 'findAllNoSchedule')

    await controller.getFilmsList()

    expect(service.findAllNoSchedule).toHaveBeenCalled();
  });

  it('should call getSchedule with specified params', async () => {
    
    jest.spyOn(service, 'getSchedule')

    await controller.getScheduleById('2c941220-77ae-4265-8b53-bf2b3dde8c78')

    expect(service.getSchedule).toHaveBeenCalledWith('2c941220-77ae-4265-8b53-bf2b3dde8c78')
  })
});
