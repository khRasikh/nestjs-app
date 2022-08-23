import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cat/cat.module';
import { CatsController } from './cat/cat.controller';
import { CatsService } from './cat/cat.service';

@Module({
  imports: [TodoModule, UserModule, CatsModule, MongooseModule.forRoot('mongodb://localhost:27017/nestjs')],
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService],
})
export class AppModule {}