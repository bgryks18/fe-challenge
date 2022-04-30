import { Module } from '@nestjs/common';
import { AccountModule } from './modules/account/account.module';
import { ActivityModule } from './modules/activity/activity.module';
import { ActivityCategoryModule } from './modules/activityCategory/activityCategory.module';

@Module({
  imports: [AccountModule, ActivityModule, ActivityCategoryModule],
})
export class AppModule {}
