import { ContentTreeController } from '../content-tree/content-tree.controller';
import { Module } from '@nestjs/common';
import { ContentController } from './content.controller';
import { ContentService } from './content.service';
import { Content } from 'src/entities/content.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContentTree } from 'src/entities/content-tree.entity';
import { ContentTreeService } from 'src/content-tree/content-tree.service';

@Module({
  controllers: [ContentController],
  imports: [
    TypeOrmModule.forFeature([Content, ContentTree]),
    ContentTreeService,
  ],
  providers: [ContentService],
})
export class ContentModule {}
