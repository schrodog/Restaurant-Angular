import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'
// import {Table} from './objects'
import {table_data } from './data/table_data'
import * as csvToJson from 'convert-csv-to-json' 

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb(){
    csvToJson.fieldDelimiter(',')
    const food_data = csvToJson.formatValueByType().getJsonFromCsv('data/menu.csv')
    const table_data = csvToJson.formatValueByType().getJsonFromCsv('data/table.csv')

    return {
      tables: table_data,
      food: food_data
    }
  }

}


