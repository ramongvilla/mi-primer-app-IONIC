import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
//import { map, take } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.getItem('token') !== null) {
        return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }


  }

}








/*
return this.authSvc.user$.pipe(
  take(1),
  map((user) => {
    console.log('user', user);

    if (user) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  })
)
*/



