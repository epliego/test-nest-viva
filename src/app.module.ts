import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionnaireService } from './services/questionnaire.service';
import { QuestionnaireController } from './controllers/questionnaire.controller';
import {
  Questionnaire,
  QuestionnaireSchema,
} from './schemas/questionnaire.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/test_viva'),
    MongooseModule.forFeature([
      { name: Questionnaire.name, schema: QuestionnaireSchema },
    ]),
  ],
  controllers: [AppController, QuestionnaireController],
  providers: [AppService, QuestionnaireService],
})
export class AppModule {}
