import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLiggedIn = true; //false
  redirectUrl : string = "";

  login() : Observable<boolean>{
    return of(true).pipe(
      delay(1000),
      tap(val => this.isLiggedIn = val)
    );
  }

  logout(): void{
    this.isLiggedIn = false;
  }
}
