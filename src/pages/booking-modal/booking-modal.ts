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
  minStartDate: any;
  minEndDate: any;
  maxDate: any;
  email:any;
  firstName:any;
  lastName:any;
  id:any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private reservationService: ReservationService) {
    this.room = navParams.get('room');
    this.property = navParams.get('property');
    this.email = localStorage.getItem('email');
    this.firstName = localStorage.getItem('firstName');
    this.lastName = localStorage.getItem('lastName');
    this.id = localStorage.getItem('id');
    this.reservation = {
      memberId: this.id,
      propertyId: this.property.id,
      roomId: this.room.id,
      start: moment().add(1, 'days').format(),
      end: moment().add(3, 'days').format(),
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      room: this.room,
      property: this.property
    }
    this.minStartDate = moment().add(1, 'days').format("YYYY-MM-DD");
    this.minEndDate = moment().add(2, 'days').format("YYYY-MM-DD");
    this.maxDate = moment().add(2, 'years').format("YYYY-MM-DD");
  }

  goHome(){
    this.navCtrl.setRoot(HomePage);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }


  conformationRedirect(reservation) {
    this.navCtrl.setRoot(ConformationPage, {
      reservation:reservation,
      property:this.property,
      room:this.room
    });
  }

  postReservation(){
    this.reservationService.postReservation(this.reservation)
      .then(res => {
        if(res.status == 200){
          this.conformationRedirect(this.reservation);
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
  room:any;
  property:any;
}
