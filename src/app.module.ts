import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContentModule } from './content/content.module';
import { ContentTreeModule } from './content-tree/content-tree.module';

@Module({
  imports: [TypeOrmModule.forRoot(), ContentModule, ContentTreeModule],
})
export class AppModule {}
