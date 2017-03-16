import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { HomePage } from '../home/home';

/*
  Generated class for the Booking page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html'
})
export class BookingPage {
  property: any;
  room: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.property = navParams.get('property');
    this.room = navParams.get('room');
  }

  ionViewDidLoad() {
    console.log(this.property, this.room);
  }

  goHome(){
    this.navCtrl.setRoot(HomePage);
  }
  presentModal() {
    let modal = this.modalCtrl.create(ModalPage);
    modal.present();
  }

}
