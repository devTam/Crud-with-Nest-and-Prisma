import { Module } from "@nestjs/common"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { PrismaModule } from "./prisma/prisma.module"
import { FeedbacksModule } from "./feedbacks/feedbacks.module"

@Module({
  imports: [
    PrismaModule, 
    FeedbacksModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
