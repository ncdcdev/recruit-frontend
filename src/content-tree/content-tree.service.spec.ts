import { ContentTreeService } from './content-tree.service';
import { Repository } from 'typeorm';
import { ContentTree } from '../entities/content-tree.entity';
describe('ContentTreeService', () => {
  let service: ContentTreeService;
  let repository: Repository<ContentTree>;

  beforeEach(async () => {
    repository = new Repository<ContentTree>();
    service = new ContentTreeService(repository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('全件取得 find', async () => {
    const result: ContentTree[] = [];
    jest.spyOn(repository, 'find').mockResolvedValue(result);
    expect((await service.find()).length).toBe(0);
  });
  it('全件取得 find 失敗', async () => {
    const result: ContentTree[] = [];
    jest.spyOn(repository, 'find').mockResolvedValue(result);
    expect((await service.find()).length).not.toBe(1);
  });
});
