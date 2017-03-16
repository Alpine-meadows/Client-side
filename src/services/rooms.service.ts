import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class RoomsService{
  http: any;
  baseUrl: string;

  constructor(http: Http){
    this.http = http;
    this.baseUrl = 'http://localhost:3000/property/'
  }

  getRooms(propertyId){
    return this.http.get(this.baseUrl+propertyId+'/rooms')
      .map(res => res.json());
  }
}
