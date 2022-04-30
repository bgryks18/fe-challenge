import { Module } from '@nestjs/common';
import { PrismaService } from '../../globals/prisma.service';
import { ActivityCategoryController } from './activityCategory.controller';
import { ActivityCategoryService } from './activityCategory.service';

@Module({
  controllers: [ActivityCategoryController],
  providers: [PrismaService, ActivityCategoryService],
})
export class ActivityCategoryModule {}
