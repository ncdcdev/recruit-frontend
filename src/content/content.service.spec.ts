import { ContentService } from './content.service';
import { Repository } from 'typeorm';
import { Content } from '../entities/content.entity';
import { ContentTree } from '../entities/content-tree.entity';

describe('ContentService', () => {
  let contentRepo: Repository<Content>;
  let contentTreeRepo: Repository<ContentTree>;
  let service: ContentService;

  beforeEach(async () => {
    contentRepo = new Repository<Content>();
    contentTreeRepo = new Repository<ContentTree>();
    service = new ContentService(contentRepo, contentTreeRepo);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('find', async () => {
    const result: Content[] = [];
    jest.spyOn(contentRepo, 'find').mockResolvedValue(result);
    expect(await service.find()).toBe(result);
  });
});
