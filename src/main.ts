import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableShutdownHooks()
  
  const config = new DocumentBuilder()
  .setTitle("Feedback API")
  .setDescription("The Feedback API description")
  .setVersion("1.0")
  .addTag("feedback api")
  .build();
  
  const document = SwaggerModule.createDocument(app as any, config, {});
  SwaggerModule.setup("api", app as any, document);
  await app.listen(3000)
}
bootstrap()
