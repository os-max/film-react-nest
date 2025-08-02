import { Test, TestingModule } from '@nestjs/testing';
import { FilmsMongoRepository } from './films-mongo.repository';
import { getModelToken } from '@nestjs/mongoose';

describe('FilmsRepository', () => {
  let provider: FilmsMongoRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FilmsMongoRepository,
        {
          provide: getModelToken('Film'),
          useValue: {},
        },
      ],
    }).compile();

    provider = module.get<FilmsMongoRepository>(FilmsMongoRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
