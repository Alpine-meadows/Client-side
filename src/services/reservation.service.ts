import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class ReservationService{
  http: any;
  baseUrl: string;

  constructor(http: Http){
    this.http = http;
    this.baseUrl = 'http://localhost:3000/reservation'
  }

  postReservation(reservation){
    return this.http.post(this.baseUrl, reservation)
      .toPromise()
  }
}
