import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RentalsPage } from '../rentals/rentals';


@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {

  private rootPage;
  private rentalsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, menu: MenuController) {
    this.rootPage = HomePage;
    this.rentalsPage = RentalsPage;
    menu.enable(true);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  openPage(p) {
    this.rootPage = p;
  }


}
