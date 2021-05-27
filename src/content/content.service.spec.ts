import { Test, TestingModule } from '@nestjs/testing';
import { ContentService } from './content.service';
import { Repository } from 'typeorm';
import { Content } from '../entities/content.entity';

describe('ContentService', () => {
  let repository: Repository<Content>;
  let service: ContentService;

  beforeEach(async () => {
    repository = new Repository<Content>();
    service = new ContentService(repository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('find', async () => {
    const result: Content[] = [];
    jest.spyOn(repository, 'find').mockResolvedValue(result);
    expect(await service.find()).toBe(result);
  });
});
