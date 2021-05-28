import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Content } from '../entities/content.entity';
import { ContentTree } from '../entities/content-tree.entity';
import { CreateContentDTO, UpdateContentDTO } from './content.dto';
import { Repository } from 'typeorm';

@Injectable()
export class ContentService {
  constructor(
    @InjectRepository(Content)
    private readonly contentRepository: Repository<Content>,
    @InjectRepository(ContentTree)
    private readonly contentTreeRepository: Repository<ContentTree>,
  ) {}

  create = async (content: CreateContentDTO) => {
    const { parentId, body, title } = content;
    const maxOrder = (await this.contentRepository.query(
      'SELECT MAX("order") as "order" FROM content',
    )) as { order: number }[];

    const parentContent = await this.contentRepository.findOneOrFail(parentId);

    const order = maxOrder.length === 0 ? 1 : maxOrder[0].order + 1;
    const createContent = this.contentRepository.create({
      title: title ?? '',
      body: body ?? '',
      order: order,
    });
    const chiledContent = await this.contentRepository.save(createContent);

    this.contentTreeRepository.insert({ parentContent, chiledContent });

    return createContent;
  };

  update = async (id, contentDto: UpdateContentDTO) => {
    await this.contentRepository.update({ id }, { ...contentDto });
    return await this.contentRepository.findOneOrFail(id);
  };

  private deleteContent = async (id: number) => {
    const treese = await this.contentTreeRepository.find({
      relations: ['chiledContent'],
      where: { parentContent: { id } },
    });
    const promises = treese.map(async (tree) => {
      return await this.deleteContent(tree.chiledContent.id);
    });
    await Promise.all(promises);

    const deleteContent = await this.contentRepository.findOne(id);
    await this.contentRepository.remove(deleteContent);
  };

  delete = async (id: number) => {
    await this.deleteContent(id);
  };

  find = async () => {
    return await this.contentRepository.find();
  };

  findOne = async (id: number) => {
    return await this.contentRepository.findOne({ id: id });
  };
}
