import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { shareReplay } from 'rxjs/operators'
import * as moment from 'moment'
import { Observable, pipe } from 'rxjs';
import {tap } from 'rxjs/operators'

class Token {
  token: string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  
  login(email: string, password: string): Observable<Token>{
    // console.log(email, password);
    
    return this.http.post<Token>('http://localhost:4001/api/login', {email, password} )
      .pipe(
        tap(x => this.setSession(x)),
        shareReplay()
      )
  }

  private setSession(authResult){
    const expiresAt = moment().add(authResult.expiresIn, 'second')
    console.log('set session', authResult);
    localStorage.setItem('id_token', authResult.token)
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()))
  }

  logout() {
    localStorage.removeItem('id_token')
    localStorage.removeItem('expires_at')
  }

  public isLoggedIn(){
    return moment().isBefore(this.getExpiration())
  }

  isLoggedOut(){
    return moment().isBefore(this.getExpiration())
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at")
    const expiresAt = JSON.parse(expiration)

    return moment(expiresAt)
  }
  
  
}

