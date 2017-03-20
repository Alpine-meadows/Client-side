import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class UserService{
  http: any;
  baseUrl: string;
  localUrl: string;

  constructor(http: Http){
    this.http = http;
    this.baseUrl = 'https://alpine-meadows.herokuapp.com/user';
    this.localUrl = 'http://10.6.65.198:3000/user';
  }

  postUser(user){
    return this.http.post(this.localUrl, user)
      .toPromise()
  }
}
