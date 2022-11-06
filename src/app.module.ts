import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PostModule } from './post/post.module';
import { PrismaModule } from './prisma/prisma.module';
import { OpenapiModule } from './openapi/openapi.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true
  }), PostModule, PrismaModule, OpenapiModule],
})
export class AppModule { }
