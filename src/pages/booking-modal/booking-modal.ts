import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ReservationService } from '../../services/reservation.service';
import { ConformationPage } from '../conformation/conformation';
import * as moment from 'moment';
/*
  Generated class for the BookingModal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-booking-modal',
  templateUrl: 'booking-modal.html'
})
export class BookingModalPage {
  room: any;
  property: any;
  reservation: reservation;


  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private reservationService: ReservationService) {
    this.room = navParams.get('room');
    this.property = navParams.get('property');
    this.reservation = {
      memberId: 1,
      propertyId: this.property.id,
      roomId: this.room.id,
      start: moment().format(),
      end: moment().add(3, 'days').format(),
      email: '',
      firstName: '',
      lastName: ''
    }
  }

  goHome(){
    this.navCtrl.setRoot(HomePage);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }


  conformationRedirect(reservation) {
    this.navCtrl.setRoot(ConformationPage);
  }

  postReservation(){
    this.reservationService.postReservation(this.reservation)
      .then(res => {
        if(res.status == 200){
          this.conformationRedirect(res._body);
        }else{
          alert('Invaild reservation please try again');
        }
      })
  }

}

interface reservation {
  memberId:number;
  propertyId:number;
  roomId:number;
  start:string;
  end:string;
  email:string;
  firstName:string;
  lastName:string;
}
