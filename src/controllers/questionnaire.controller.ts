import {
  Controller,
  Res,
  Get,
  Post,
  Body,
  Delete,
  Param,
  Put,
} from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiCreatedResponse,
  ApiAcceptedResponse,
} from '@nestjs/swagger';
import { CreateQuestionnaireDto } from '../dto/create-questionnaire.dto';
import { QuestionnaireService } from '../services/questionnaire.service';

@Controller('v1')
export class QuestionnaireController {
  constructor(private readonly questionnaireService: QuestionnaireService) {}

  /**
   * API Get List Questionnaires
   * @param response
   */
  @ApiOperation({
    summary: 'Get List Questionnaires',
  })
  @ApiResponse({
    status: 404,
    description: '<b>Error Message:</b> Error in service List Questionnaires',
  })
  @ApiOkResponse({
    description: 'Consulted service List Questionnaires successfully',
    type: CreateQuestionnaireDto,
  })
  @Get('list-questionnaire')
  async configuration(@Res() response): Promise<any> {
    return this.questionnaireService.findAll(response);
  }

  /**
   * API Create Questionnaire
   * @param createQuestionnaireDto
   * @param response
   */
  @ApiOperation({
    summary: 'Create Questionnaire',
  })
  @ApiResponse({
    status: 404,
    description: '<b>Error Message:</b> Error in service Create Questionnaire',
  })
  @ApiCreatedResponse({
    description: 'Questionnaire created successfully',
  })
  @Post('create-questionnaire')
  async create(
    @Body() createQuestionnaireDto: CreateQuestionnaireDto,
    @Res() response,
  ) {
    await this.questionnaireService.create(createQuestionnaireDto, response);
  }

  /**
   * API Delete Questionnaire
   * @param id
   * @param response
   */
  @ApiOperation({
    summary: 'Delete Questionnaire',
  })
  @ApiResponse({
    status: 404,
    description: '<b>Error Message:</b> Error in service Delete Questionnaire',
  })
  @ApiAcceptedResponse({
    description: 'Questionnaire deleted successfully',
  })
  @Delete('delete-questionnaire/:id')
  async delete(@Param('id') id: string, @Res() response) {
    return this.questionnaireService.delete(id, response);
  }

  /**
   * API Update Questionnaire
   * @param id
   * @param createQuestionnaireDto
   * @param response
   */
  @ApiOperation({
    summary: 'Update Questionnaire',
  })
  @ApiResponse({
    status: 404,
    description: '<b>Error Message:</b> Error in service Update Questionnaire',
  })
  @ApiAcceptedResponse({
    description: 'Questionnaire updated successfully',
  })
  @Put('update-questionnaire:id')
  async update(
    @Param('id') id: string,
    @Body() createQuestionnaireDto: CreateQuestionnaireDto,
    @Res() response,
  ) {
    return this.questionnaireService.update(
      id,
      createQuestionnaireDto,
      response,
    );
  }
}
