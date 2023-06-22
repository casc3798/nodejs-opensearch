import { Module, DynamicModule } from '@nestjs/common';
import { Client } from '@opensearch-project/opensearch';

import { SearchService } from './search.service';
import { SearchController } from './search.controller';

@Module({})
export class SearchModule {
  static register(): DynamicModule {
    return {
      module: SearchModule,
      controllers: [SearchController],
      providers: [
        SearchService,
        {
          provide: 'Open_Search_JS_Client',
          useValue: {
            instance: new Client({
              node: process.env.OS_NODE,
              ssl: {
                rejectUnauthorized: false,
              },
            }),
          },
        },
      ],
      exports: [SearchService],
    };
  }
}
