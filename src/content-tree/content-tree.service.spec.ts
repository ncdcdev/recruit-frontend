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
  it('保存件数が0件の場合、空の配列を返す', async () => {
    const result: ContentTree[] = [];
    jest.spyOn(repository, 'find').mockResolvedValue(result);

    expect((await service.find()).length).toBe(0);
  });
  it('保存されている内容を返す', async () => {
    const result: ContentTree[] = [
      {
        id: 1,
        chiledContent: {
          id: 2,
          title: 'childTitle',
          order: 3,
        },
        parentContent: {
          id: 2,
          title: 'parentTitle',
          order: 4,
        },
      },
    ];
    jest.spyOn(repository, 'find').mockResolvedValue(result);
    expect(await service.find()).toEqual([
      {
        id: result[0].id,
        childTitle: result[0].chiledContent?.title,
        childId: result[0].chiledContent?.id,
        parentTitle: result[0].parentContent?.title,
        parentId: result[0].parentContent?.id,
      },
    ]);
  });
});
