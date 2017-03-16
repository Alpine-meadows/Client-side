import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { HomePage } from '../home/home'

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.room = navParams.get('room');
    this.property = navParams.get('property');
    this.reservation = {
      start: '',
      end: '',
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

}

interface reservation {
  start:string;
  end:string;
  email:string;
  firstName:string;
  lastName:string;
}
