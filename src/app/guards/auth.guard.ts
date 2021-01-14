import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService : AuthService, private router : Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log("can activate");
    const {url } = state;
    return this.checkLogin(url);
  }

  private checkLogin(url : string) : boolean{
    if (this.authService.isLiggedIn){
      return true;
    }
    this.authService.redirectUrl = url;

    this.router.navigate(['/login'])
    return false;
  }
  
}
