import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './commons/swagger-setup';
import { setupValidation } from './commons/validation-setup';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  setupValidation(app);
  setupSwagger(app);
  await app.listen(3000);
}

bootstrap().then(() => console.log('Application started'));
