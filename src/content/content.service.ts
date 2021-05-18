import { ContentTree } from 'src/entities/content-tree.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Content } from '../entities/content.entity';
import { CreateContentDTO } from './content.dto';
import { Repository } from 'typeorm';
import { ContentTreeService } from 'src/content-tree/content-tree.service';

@Injectable()
export class ContentService {
  constructor(
    @InjectRepository(Content)
    private readonly contentRepository: Repository<Content>,
    @InjectRepository(ContentTree)
    private readonly contentTreeRepository: Repository<ContentTree>,
  ) {}

  create = async (content?: CreateContentDTO) => {
    const maxOrder = (await this.contentRepository.query(
      'SELECT MAX("order") as "order" FROM content',
    )) as { order: number }[];
    const test = await this.contentTreeRepository.find();
    console.log(test, 'test');

    const order = maxOrder.length === 0 ? 1 : maxOrder[0].order + 1;
    return this.contentRepository.insert({
      title: content.title ?? '',
      body: content.body ?? '',
      order: order,
    });
  };

  find = async () => {
    return await this.contentRepository.find();
  };

  findOne = async (id: number) => {
    return await this.contentRepository.findOne({ id: id });
  };
}
