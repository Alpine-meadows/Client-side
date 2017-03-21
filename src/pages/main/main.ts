import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RentalsPage } from '../rentals/rentals';
import { Login2Page } from '../login2/login2';
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
    this.token = localStorage.getItem('token');
    menu.enable(true);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  goLogin(){
    this.navCtrl.setRoot(Login2Page);
  }

  logout() {
    localStorage.removeItem('email');
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    localStorage.removeItem('id');
    localStorage.removeItem('token');
    this.navCtrl.setRoot(HomePage);
  }


}
