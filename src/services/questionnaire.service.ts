import { Model } from 'mongoose';
import { HttpStatus, Injectable, Res } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  Questionnaire,
  QuestionnaireDocument,
} from '../schemas/questionnaire.schema';
import { CreateQuestionnaireDto } from '../dto/create-questionnaire.dto';

@Injectable()
export class QuestionnaireService {
  constructor(
    @InjectModel(Questionnaire.name)
    private questionnaireModel: Model<QuestionnaireDocument>,
  ) {}

  /**
   * Create questionnaire
   * @param createQuestionnaireDto
   * @param response
   */
  async create(
    createQuestionnaireDto: CreateQuestionnaireDto,
    @Res() response,
  ) {
    try {
      const createdQuestionnaire = new this.questionnaireModel(
        createQuestionnaireDto,
      );

      await createdQuestionnaire.save();

      response.status(HttpStatus.CREATED).json({
        statusCode: 201,
        message: 'Questionnaire created successfully',
        data: [],
      });
    } catch (err) {
      response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: 503,
        message: 'Error in service Create Questionnaire',
        data: [
          {
            error: err,
          },
        ],
      });
    }
  }

  /**
   * List all questionnaire
   * @param response
   */
  // async findAll(@Res() response): Promise<Questionnaire[]> {
  async findAll(@Res() response) {
    try {
      // return this.questionnaireModel.find().exec();
      response.status(HttpStatus.OK).json({
        statusCode: 200,
        message: 'Consulted service List Questionnaires successfully',
        data: await this.questionnaireModel.find().exec(),
      });
    } catch (err) {
      response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: 503,
        message: 'Error in service List Questionnaires',
        data: [
          {
            error: err,
          },
        ],
      });
    }
  }

  /**
   * Delete Questionnaire
   * @param id
   * @param response
   */
  async delete(id: string, @Res() response) {
    try {
      await this.questionnaireModel.findByIdAndRemove({ _id: id }).exec();

      response.status(HttpStatus.ACCEPTED).json({
        statusCode: 202,
        message: 'Questionnaire deleted successfully',
        data: [],
      });
    } catch (err) {
      response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: 503,
        message: 'Error in service Delete Questionnaire',
        data: [
          {
            error: err,
          },
        ],
      });
    }
  }

  /**
   * Update Questionnaire
   * @param id
   * @param createQuestionnaireDto
   * @param response
   */
  async update(
    id: string,
    createQuestionnaireDto: CreateQuestionnaireDto,
    @Res() response,
  ) {
    try {
      await this.questionnaireModel
        .findByIdAndUpdate({ _id: id }, { $set: createQuestionnaireDto })
        .exec();

      response.status(HttpStatus.ACCEPTED).json({
        statusCode: 202,
        message: 'Questionnaire updated successfully',
        data: [],
      });
    } catch (err) {
      response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: 503,
        message: 'Error in service Update Questionnaire',
        data: [
          {
            error: err,
          },
        ],
      });
    }
  }
}
