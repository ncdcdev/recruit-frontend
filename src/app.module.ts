import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContentModule } from './content/content.module';
import { ContentTreeModule } from './content-tree/content-tree.module';

@Module({
  imports: [TypeOrmModule.forRoot(), ContentModule, ContentTreeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
