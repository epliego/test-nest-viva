import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type QuestionnaireDocument = Questionnaire & Document;

@Schema()
export class Questionnaire {
  @Prop()
  question_number: number;

  @Prop()
  question: string;

  @Prop()
  answers: any[];
}

export const QuestionnaireSchema = SchemaFactory.createForClass(Questionnaire);
