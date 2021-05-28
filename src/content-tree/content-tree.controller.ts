import { Controller, Get } from '@nestjs/common';
import { ContentTreeService } from './content-tree.service';

@Controller('content-tree')
export class ContentTreeController {
  constructor(private readonly service: ContentTreeService) {}
  @Get()
  async getAllContentTreeList() {
    return await this.service.find();
  }
}
