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
    return await this.contentTreeRepository.find();
  };
}
