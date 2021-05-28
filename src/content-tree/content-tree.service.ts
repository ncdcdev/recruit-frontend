import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ContentTree } from '../entities/content-tree.entity';

@Injectable()
export class ContentTreeService {
  constructor(
    @InjectRepository(ContentTree)
    private readonly contentTreeRepository: Repository<ContentTree>,
  ) {}

  find = async () => {
    const contentTreese = await this.contentTreeRepository.find({
      relations: ['parentContent', 'chiledContent'],
    });
    return contentTreese.map((contentTree) => {
      return {
        id: contentTree.id,
        childTitle: contentTree.chiledContent?.title,
        childId: contentTree.chiledContent?.id,
        parentTitle: contentTree.parentContent?.title,
        parentId: contentTree.parentContent?.id,
      };
    });
  };
}
