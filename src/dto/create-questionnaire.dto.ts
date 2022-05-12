import { IsNotEmpty, IsArray, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateQuestionnaireDto {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  readonly question_number: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly question: string;

  @IsNotEmpty()
  @IsArray()
  @ApiProperty({
    isArray: true,
    example: [
      { answer: 'Resp 1' },
      { answer: 'Resp 2' },
      { answer: 'Resp 3' },
      { answer: 'Resp 4' },
    ],
  })
  readonly answers: any[];
}
