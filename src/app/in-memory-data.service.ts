import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'
// import {Table} from './objects'

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb(){
    const tables = [
      {tableNo: 'T1', numOfSeat: 10, available: true},
      {tableNo: 'T2', numOfSeat: 8, available: true},
      {tableNo: 'T3', numOfSeat: 7, available: false},
      {tableNo: 'T4', numOfSeat: 4, available: false},
      {tableNo: 'T5', numOfSeat: 4, available: true},
      {tableNo: 'T6', numOfSeat: 4, available: false},
      {tableNo: 'T7', numOfSeat: 4, available: true},
      {tableNo: 'T8', numOfSeat: 6, available: false},
      {tableNo: 'T9', numOfSeat: 4, available: true},
      {tableNo: 'T10', numOfSeat: 2, available: false},
      {tableNo: 'T11', numOfSeat: 5, available: false},
      {tableNo: 'T12', numOfSeat: 4, available: true},
      {tableNo: 'T13', numOfSeat: 5, available: true},
      {tableNo: 'T14', numOfSeat: 6, available: true},
      {tableNo: 'T15', numOfSeat: 4, available: true},
      {tableNo: 'T16', numOfSeat: 3, available: false},
      {tableNo: 'T17', numOfSeat: 3, available: false},
      {tableNo: 'T18', numOfSeat: 4, available: false},
      {tableNo: 'T19', numOfSeat: 4, available: true},
      {tableNo: 'T20', numOfSeat: 6, available: true}
    ]
    return {tables}
  }

}


