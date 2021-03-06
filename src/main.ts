import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bodyParser: true, cors: true });
  // app.enableCors();
  await app.listen(4000);
}
bootstrap();
