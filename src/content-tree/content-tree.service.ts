import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ContentTree } from '../entities/content-tree.entity';

export type FindContentTree = {
  id: number;
  childTitle?: string;
  childId?: number;
  childOrder: number;
  parentTitle?: string;
  parentId?: number;
  parentOrder: number;
};

@Injectable()
export class ContentTreeService {
  constructor(
    @InjectRepository(ContentTree)
    private readonly contentTreeRepository: Repository<ContentTree>,
  ) {}

  find = async (): Promise<FindContentTree[]> => {
    const contentTreese = await this.contentTreeRepository.find({
      relations: ['parentContent', 'chiledContent'],
    });
    return contentTreese.map((contentTree) => {
      return {
        id: contentTree.id,
        childTitle: contentTree.chiledContent?.title,
        childId: contentTree.chiledContent?.id,
        childOrder: contentTree.chiledContent?.order,
        parentTitle: contentTree.parentContent?.title,
        parentId: contentTree.parentContent?.id,
        parentOrder: contentTree.parentContent?.order,
      };
    });
  };
}
