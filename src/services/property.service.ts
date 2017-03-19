import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class PropertyService{
  http: any;
  baseUrl: string;
  localUrl: string;

  constructor(http: Http){
    this.localUrl = 'http://localhost:3000/property'
    this.http = http;
    this.baseUrl = 'https://alpine-meadows.herokuapp.com/property'
  }

  getProperties(){
    return this.http.get(this.baseUrl)
      .map(res => res.json());
  }
}
