import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContentModule } from './content/content.module';

@Module({
  imports: [TypeOrmModule.forRoot(), ContentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
