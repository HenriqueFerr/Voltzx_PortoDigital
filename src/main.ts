import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // se precisar acessar de outro domínio (ex: frontend)
  await app.listen(3000);
  console.log('Servidor rodando em http://localhost:3000');
}
bootstrap();
