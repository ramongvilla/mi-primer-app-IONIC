import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class LogoutGuard implements CanActivate {
  ruta1 = '/admin';
 // ruta = {"ruta":"/home"}
  constructor(private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.ruta1 = '/admin';

    if (localStorage.getItem('token') == null) {
      
      return true;
    }else{

      //this.router.navigate(['/home']);
      let pages=[]
      pages = JSON.parse(localStorage.getItem('navegacion'));
      //pages.length.
      const ruta = pages[pages.length-1]
      this.router.navigate([ruta]);
      return false;
    }


   




  }

}
