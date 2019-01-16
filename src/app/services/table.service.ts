import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs'
import {catchError, map, tap} from 'rxjs/operators'
import {Table} from '../objects'
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TableService {

  private tableUrl = "api/tables"
  // private tableUrl = "http://localhost:4001/api/tables"
  constructor(
    private http: HttpClient
  ) { }

  getTables(): Observable<Table[]>{
    return this.http.get<Table[]>(this.tableUrl).pipe(
      catchError(err => {throw 'get tables'} )
    )
  }

  

  
}
