import { Test, TestingModule } from '@nestjs/testing';
import { FilmsPgRepository } from './films-pg.repository';

describe('FilmsPgRepository', () => {
  let provider: FilmsPgRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FilmsPgRepository],
    }).compile();

    provider = module.get<FilmsPgRepository>(FilmsPgRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
