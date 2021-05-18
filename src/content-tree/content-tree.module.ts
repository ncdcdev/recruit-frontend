import { Module } from '@nestjs/common';
import { ContentTreeService } from './content-tree.service';
import { ContentTreeController } from './content-tree.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContentTree } from 'src/entities/content-tree.entity';

@Module({
  controllers: [ContentTreeController],
  imports: [TypeOrmModule.forFeature([ContentTree])],
  providers: [ContentTreeService],
})
export class ContentTreeModule {}
