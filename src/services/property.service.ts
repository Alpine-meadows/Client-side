import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {AuthHttp} from 'angular2-jwt';
import {AuthService} from '../../services/auth.service';
import 'rxjs/Rx';

@Injectable()

export class PropertyService{
  http: any;
  baseUrl: string;
  localUrl: string;

  constructor(authHttp: AuthHttp){
    this.localUrl = 'http://localhost:3000/property'
    this.http = authHttp;
    this.baseUrl = 'https://alpine-meadows.herokuapp.com/property'
  }

  getProperties(){
    return this.http.get(this.localUrl)
      .map(res => res.json());
  }
}
