import {
  Get,
  Post,
  Query,
  Body,
  Param,
  Delete,
  Controller,
} from '@nestjs/common';

import { DataSet } from './search.dto';
import { SearchService } from './search.service';

@Controller('characters')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Post('multiple')
  bulkIngestion(@Body() input: DataSet): Promise<any> {
    return this.searchService.bulkDataIngestion(input);
  }

  @Post()
  singleIngestion(@Body() input: DataSet): Promise<any> {
    return this.searchService.singleDataIngestion(input);
  }

  @Get('/:indexName')
  searchByKeywork(
    @Param('indexName') indexName: string,
    @Query('keyword') keyword: string,
  ): Promise<any> {
    return this.searchService.searchCharacterByKeyword({ keyword, indexName });
  }

  @Delete('/:indexName/bulk')
  purgeIndex(@Param('indexName') indexName: string): Promise<any> {
    return this.searchService.purgeIndex({ indexName });
  }

  @Delete('/:indexName/:id')
  purgeById(
    @Param('indexName') indexName: string,
    @Param('id') id: string,
  ): Promise<any> {
    return this.searchService.purgeDocumentById({ indexName, id });
  }
}
