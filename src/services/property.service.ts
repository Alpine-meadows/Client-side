import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class PropertyService{
  http: any;
  baseUrl: string;

  constructor(http: Http){
    this.http = http;
    this.baseUrl = 'https://alpine-meadows.herokuapp.com/property'
  }

  getProperties(){
    return this.http.get(this.baseUrl)
      .map(res => res.json());
  }
}
