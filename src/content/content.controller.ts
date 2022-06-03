import { ApiBody, ApiOperation } from '@nestjs/swagger';
import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Put,
} from '@nestjs/common';
import { ContentService } from './content.service';
import { CreateContentDTO, UpdateContentDTO } from './content.dto';
import { Content } from '../entities/content.entity';

@Controller('content')
export class ContentController {
  constructor(private readonly service: ContentService) {}

  @Get()
  @ApiOperation({ summary: 'コンテンツ一覧の取得' })
  async getAllContentList(): Promise<Content[]> {
    return await this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'コンテンツの取得' })
  async getContent(@Param('id') id: number): Promise<Content> {
    return await this.service.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'コンテンツの作成' })
  @ApiBody({ type: CreateContentDTO })
  async addContent(@Body() content: CreateContentDTO) {
    return await this.service.create(content);
  }

  @Put(':id')
  @ApiOperation({ summary: 'コンテンツの更新' })
  @ApiBody({ type: UpdateContentDTO })
  async updateContent(
    @Param('id') id: number,
    @Body() content: UpdateContentDTO,
  ) {
    return await this.service.update(id, content);
  }
  @Delete(':id')
  @ApiOperation({ summary: 'コンテンツの削除' })
  async deleteContent(@Param('id') id: number) {
    return await this.service.delete(id);
  }
}
