import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ReservationService } from '../../services/reservation.service';
import { MainPage } from '../main/main';
import * as moment from 'moment';
import { MomentModule } from 'angular2-moment';

/*
  Generated class for the User page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})
export class UserPage {
  reservations: any;
  memberId: string;
  firstName: string;
  lastName: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private reservationService: ReservationService) {
    this.memberId = localStorage.getItem('id');
    this.firstName = localStorage.getItem('firstName');
    this.lastName = localStorage.getItem('lastName');
  }

  ionViewDidLoad() {
    this.getMemberReservations();
  }

  getMemberReservations(){
    this.reservationService.getMemberReservations(this.memberId)
      .then(res => {
        if(res.status == 200){
          this.reservations = JSON.parse(res._body).reverse();
        }else{
          alert('Invaild login please try again');
        }
      })
  }
  goHome(){
    this.navCtrl.setRoot(MainPage);
  }

}
