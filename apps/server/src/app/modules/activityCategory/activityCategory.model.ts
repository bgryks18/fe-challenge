import { ApiProperty } from '@nestjs/swagger';
import { ActivityCategory } from '@prisma/client';

export class ActivityCategoryEntity implements ActivityCategory {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;
}
