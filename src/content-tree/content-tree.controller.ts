import { ApiOperation } from '@nestjs/swagger';
import { Controller, Get } from '@nestjs/common';
import { ContentTreeService } from './content-tree.service';

@Controller('content-tree')
export class ContentTreeController {
  constructor(private readonly service: ContentTreeService) {}
  @Get()
  @ApiOperation({
    summary: 'コンテンツツリーの取得',
    description: '閉包テーブルっぽく返す',
  })
  async getAllContentTreeList() {
    return await this.service.find();
  }
}
