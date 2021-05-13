import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ContentService } from './content.service';
import { CreateContentDTO } from './content.dto';
import { Content } from '../entities/content.entity';
import { InsertResult } from 'typeorm';

@Controller('content')
export class ContentController {
  constructor(private readonly service: ContentService) {}

  @Get()
  async getAllContentList(): Promise<Content[]> {
    return await this.service.find();
  }

  @Get(':id')
  async getContent(@Param('id') id: string): Promise<Content> {
    return await this.service.findOne(Number(id));
  }
  @Post()
  async addContent(@Body() content?: CreateContentDTO): Promise<InsertResult> {
    return await this.service.create(content);
  }
}
