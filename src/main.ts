import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// 129c3793bddf45da899163426220611

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    // whitelist: true, // DTO에 정의된 Property만 request 파라미터로 받음
  }));
  await app.listen(3000);
}
bootstrap();
