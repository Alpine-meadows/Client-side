import { Component } from '@angular/core';
import { App, MenuController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { RentalsPage } from '../rentals/rentals'
import { PropertyService } from '../../services/property.service'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, app: App, menu: MenuController) {
    menu.enable(true);
  }

  viewRentals(){
    this.navCtrl.setRoot(RentalsPage);
  }
}
