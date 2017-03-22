import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class ReservationService{
  http: any;
  baseUrl: string;
  localUrl: string;

  constructor(http: Http){
    this.http = http;
    this.baseUrl = 'https://alpine-meadows.herokuapp.com/reservation';
    this.localUrl = 'http://localhost:3000/reservation';
  }

  postReservation(reservation){
    return this.http.post(this.localUrl, reservation)
      .toPromise()
  }

  getMemberReservations(memberId){
    return this.http.get(this.localUrl+'/'+memberId)
      .toPromise()
  }
}
