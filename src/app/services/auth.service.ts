import { Injectable } from '@angular/core';
import { User } from '../core/login/login';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/firestore";
import { Observable, of, Subject } from 'rxjs';
import { switchMap } from "rxjs/operators";
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})

export class AuthService {

  public user$: Observable<User>;

  public pagina$: Observable<[]>;

  navPagina = [];
  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) {

    this.user$ = this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        }
        return of(null);
      })
    )





  }


  apilar(page: string) {
    // this.navPagina.push(pagina);
    let pages = [];
    //localStorage.setItem('navegacion', this.navPagina);  
    if (localStorage.getItem('navegacion') === null) {
      pages.push(page);
      localStorage.setItem('navegacion', JSON.stringify(pages));
    } else {
      pages = JSON.parse(localStorage.getItem('navegacion'));
      pages.push(page);
      localStorage.setItem('navegacion', JSON.stringify(pages));

    }
  }
  desapilar() {
    let pages = [];
    pages = JSON.parse(localStorage.getItem('navegacion'));
    pages.pop();
    localStorage.setItem('navegacion', JSON.stringify(pages));
  }

  async resetPassword(email: string): Promise<void> {
    try {
      return this.afAuth.sendPasswordResetEmail(email);
    } catch (error) {

    }
  }


  async login(email: string, password: string): Promise<User> {
    try {
      const { user } = await this.afAuth.signInWithEmailAndPassword(email, password)
      this.updateUserData(user);
      this.getToken(user);
      this.router.navigate(['/home']);
      //this.router
      return user;
    } catch (error) {
      console.log('Error:', error);
    }
  }

  async loginGoogle(): Promise<User> {
    try {
      const { user } = await this.afAuth.signInWithPopup(new firebase.default.auth.GoogleAuthProvider());
      this.updateUserData(user);
      this.getToken(user);
      this.router.navigate(['/home']);
      return user;
      //return user.displayName
    } catch (error) {
      console.log('errr->', error);


    }
  }



  async register(email: string, password: string): Promise<User> {
    try {
      const { user } = await this.afAuth.createUserWithEmailAndPassword(email, password);
      await this.sendVerifiationEmail();
      return user;
    } catch (error) {

    }
  }




  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);

    /*
    try {
      await this.afAuth.signOut();
    } catch (error) {
      console.log('Error:', error);
    }
  */
  }

  getToken(user: User) {
    //return user; const getToken = this.authSvc.getToken(user);    
    console.log('user', user.displayName, user.email, user.uid);


    localStorage.setItem('token', user.uid);
  }


  updateUserData(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    const data: User = {
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified,
      displayName: user.displayName
    };

    return userRef.set(data, { merge: true });
  }

  async sendVerifiationEmail(): Promise<void> {
    try {
      return (await this.afAuth.currentUser).sendEmailVerification();

    } catch (error) {

    }
  }


  // pasar parametro de
  accion: string;
  private pasarAaccionSubject = new Subject<string>();
  pasarAccionObsevable = this.pasarAaccionSubject.asObservable();

  PasarAccion(accion) {
    this.accion = accion;
    console.log('au vamos pa', this.accion);
    console.log('le dude', accion);

    this.pasarAaccionSubject.next(accion);
  }
  ///aqui termina

}
