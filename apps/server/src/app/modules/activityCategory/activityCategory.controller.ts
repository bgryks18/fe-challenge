import { ActivityCategoryCreateSchema } from '@magiclick/utils/validators/activityCategory.validator';
import { Body, Controller, Get, Post, Query, UsePipes } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { YupValidationPipe } from '../../pipes/yup-validation.pipe';
import { ActivityCategoryCreateInput } from './activityCategory.dto';
import { ActivityCategoryEntity } from './activityCategory.model';
import { ActivityCategoryService } from './activityCategory.service';

@ApiTags('ActivityCategory')
@Controller('activityCategory')
export class ActivityCategoryController {
  constructor(
    private readonly activityCategoryService: ActivityCategoryService
  ) {}

  @Post()
  @UsePipes(new YupValidationPipe(ActivityCategoryCreateSchema))
  @ApiCreatedResponse({ type: ActivityCategoryEntity })
  async create(
    @Body() data: ActivityCategoryCreateInput
  ): Promise<ActivityCategoryEntity> {
    return this.activityCategoryService.create(data);
  }

  @Get()
  @ApiOkResponse({ type: ActivityCategoryEntity, isArray: true })
  async list(
    @Query() where: Prisma.ActivityWhereInput
  ): Promise<ActivityCategoryEntity[]> {
    return this.activityCategoryService.list(where);
  }
}
