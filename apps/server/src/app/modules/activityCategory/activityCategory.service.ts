import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { defaultTo } from 'rambdax';
import { PrismaService } from '../../globals/prisma.service';
import { ActivityCategoryCreateInput } from './activityCategory.dto';
import { ActivityCategoryEntity } from './activityCategory.model';

@Injectable()
export class ActivityCategoryService {
  constructor(private prisma: PrismaService) {}

  async create(
    createActivityInput: ActivityCategoryCreateInput
  ): Promise<ActivityCategoryEntity | null> {
    return this.prisma.activityCategory.create({
      data: {
        ...createActivityInput,
      },
    });
  }

  async list(
    where: Prisma.ActivityWhereInput
  ): Promise<ActivityCategoryEntity[]> {
    return this.prisma.activityCategory.findMany({
      where: where,
      orderBy: { id: 'desc' },
    });
  }
}
