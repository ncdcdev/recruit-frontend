import { Test, TestingModule } from '@nestjs/testing';
import { ContentService } from './content.service';
import { Repository } from 'typeorm';
import { Content } from '../entities/content.entity';
import { ContentTree } from 'src/entities/content-tree.entity';

describe('ContentService', () => {
  let contentRepository: Repository<Content>;
  let contentTreeRepository: Repository<ContentTree>;
  let service: ContentService;

  beforeEach(async () => {
    contentRepository = new Repository<Content>();
    contentTreeRepository = new Repository<ContentTree>();
    service = new ContentService(contentRepository, contentTreeRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('find', async () => {
    const result: Content[] = [];
    jest.spyOn(contentRepository, 'find').mockResolvedValue(result);
    expect(await service.find()).toBe(result);
  });
});
