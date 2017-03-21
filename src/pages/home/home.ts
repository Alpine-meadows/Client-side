import { Component } from '@angular/core';
import { App, MenuController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { RentalsPage } from '../rentals/rentals'
import { PropertyService } from '../../services/property.service'
import { Login2Page } from '../login2/login2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  token:any;
  firstName:any;
  constructor(public navCtrl: NavController, app: App, menu: MenuController) {
    menu.enable(true);
    this.token = localStorage.getItem('token');
    this.firstName = localStorage.getItem('firstName');
  }

  viewRentals(){
    this.navCtrl.setRoot(RentalsPage);
  }

  goLogin(){
    this.navCtrl.push(Login2Page);
  }
}
