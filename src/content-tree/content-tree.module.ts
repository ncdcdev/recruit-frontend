import { Module } from '@nestjs/common';
import { ContentTreeService } from './content-tree.service';
import { ContentTreeController } from './content-tree.controller';

@Module({
  providers: [ContentTreeService],
  controllers: [ContentTreeController],
})
export class ContentTreeModule {}
