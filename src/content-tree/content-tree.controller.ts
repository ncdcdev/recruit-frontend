import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ContentTreeService } from './content-tree.service';
import { ContentTree } from './../entities/content-tree.entity';

@Controller('content-tree')
export class ContentTreeController {
  constructor(private readonly service: ContentTreeService) {}
  @Get()
  async getAllContentTreeList(): Promise<ContentTree[]> {
    return await this.service.find();
  }
}
