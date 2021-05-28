import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { ContentService } from './content.service';
import { CreateContentDTO } from './content.dto';
import { Content } from '../entities/content.entity';

@Controller('content')
export class ContentController {
  constructor(private readonly service: ContentService) {}

  @Get()
  async getAllContentList(): Promise<Content[]> {
    return await this.service.find();
  }

  @Get(':id')
  async getContent(@Param('id') id: number): Promise<Content> {
    return await this.service.findOne(id);
  }
  @Post()
  async addContent(@Body() content: CreateContentDTO) {
    return await this.service.create(content);
  }
  @Delete(':id')
  async deleteContent(@Param('id') id: number) {
    return await this.service.delete(id);
  }
}
