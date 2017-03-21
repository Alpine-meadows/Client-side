import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RentalsPage } from '../rentals/rentals';
import { Login2Page } from '../login2/login2';
import { UserPage } from '../user/user';
import {AuthHttp, JwtHelper, tokenNotExpired, AuthConfig} from 'angular2-jwt';


@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {
  private rootPage;
  private rentalsPage;
  token: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, menu: MenuController) {
    this.rootPage = HomePage;
    this.rentalsPage = RentalsPage;
    menu.enable(true);

  }

  ionViewDidLoad() {
    this.token = localStorage.getItem('token');
  }

  goLogin(){
    this.navCtrl.push(Login2Page);
  }

  logout() {
    localStorage.removeItem('email');
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    localStorage.removeItem('id');
    localStorage.removeItem('token');
    this.navCtrl.setRoot(Login2Page);
  }

  viewReservations(){
    this.navCtrl.setRoot(UserPage);
  }


}
