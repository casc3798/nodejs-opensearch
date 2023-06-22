export class DataSet {
  indexName: string;
  characters: Character[];
}

export class Character {
  id: string;
  name: string;
  quote: string;
}

export class DeleteInput {
  indexName: string;
  id?: string;
}

export class searchCharacterByKeyword {
  indexName: string;
  keyword: string;
}
