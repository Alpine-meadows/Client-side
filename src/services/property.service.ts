import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class PropertyService{
  http: any;
  baseUrl: string;

  constructor(http: Http){
    this.http = http;
    this.baseUrl = 'http://localhost:3000/property'
  }

  getProperties(){
    return this.http.get(this.baseUrl)
      .map(res => res.json());
  }
}
