import { Test, TestingModule } from '@nestjs/testing';
import { ContentTreeController } from './content-tree.controller';

describe('ContentTreeController', () => {
  let controller: ContentTreeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContentTreeController],
    }).compile();

    controller = module.get<ContentTreeController>(ContentTreeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
