import {AuthHttp, JwtHelper, tokenNotExpired, AuthConfig} from 'angular2-jwt';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {
  jwtHelper: JwtHelper = new JwtHelper();
  user:any;
  http: any;
  baseUrl: string;
  localUrl: string;
  token: any;
  member: any;

  constructor(private authHttp: AuthHttp, http: Http) {
    this.user = localStorage.getItem('profile')
    this.http = http;
    this.baseUrl = 'https://alpine-meadows.herokuapp.com/';
    this.localUrl = 'http://localhost:3000/';
  }

  public authenticated() {
    return tokenNotExpired();
  }

  public login(member) {
    return this.http.post(this.localUrl+'signin', member)
      .toPromise()
  }

  public signup(newMember) {
    return this.http.post(this.localUrl+'signup', newMember)
      .toPromise()
  }

}
