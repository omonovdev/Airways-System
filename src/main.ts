import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Global validation
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
  );

  // Enable CORS
  app.enableCors();

  // Global API prefix
  app.setGlobalPrefix('api');

  await app.listen(process.env.PORT ?? 3000, () => {
    console.log(
      `Server is running on http://localhost:${process.env.PORT ?? 3000}/api`,
    );
  });
}
bootstrap();
