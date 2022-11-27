import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger/dist';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  const config = new DocumentBuilder()
  .setTitle('Task Back End')
  .setDescription('Task Back End TypeOrm')
  .setVersion('0.0.1')
  .addBearerAuth()
  .addTag('user')
  .build();

const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document, {
  customSiteTitle: 'eCommerce Swagger API',
});


  await app.listen(3000);
}
bootstrap();
