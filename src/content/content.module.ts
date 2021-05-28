import { Module } from '@nestjs/common';
import { ContentController } from './content.controller';
import { ContentService } from './content.service';
import { Content } from 'src/entities/content.entity';
import { ContentTree } from 'src/entities/content-tree.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [ContentController],
  imports: [TypeOrmModule.forFeature([Content, ContentTree])],
  providers: [ContentService],
})
export class ContentModule {}
