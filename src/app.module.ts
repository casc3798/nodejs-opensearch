import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SearchModule } from './search/search.module';

@Module({
  imports: [ConfigModule.forRoot(), SearchModule.register()],
  controllers: [],
  providers: [],
})
export class AppModule {}
