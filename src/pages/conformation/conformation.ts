import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import * as moment from 'moment';

/*
  Generated class for the Conformation page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-conformation',
  templateUrl: 'conformation.html'
})
export class ConformationPage {
  reservation:any;
  property:any;
  room:any;
  startDate:any;
  endDate:any;
  email:any;
  firstName:any;
  lastName:any;
  id:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.email = localStorage.getItem('email');
    this.firstName = localStorage.getItem('firstName');
    this.lastName = localStorage.getItem('lastName');
    this.id = localStorage.getItem('id');
    this.reservation = navParams.get('reservation');
    this.property = navParams.get('property');
    this.room = navParams.get('room')
    this.startDate = moment(this.reservation.start).format("MMM Do YYYY");
    this.endDate = moment(this.reservation.end).format("MMM Do YYYY");
  }

  ionViewDidLoad() {

  }

  goHome(){
    this.navCtrl.setRoot(HomePage);
  }

}
