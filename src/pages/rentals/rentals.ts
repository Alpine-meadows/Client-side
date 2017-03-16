import { Component } from '@angular/core';
import { NavController, NavParams, MenuController, App } from 'ionic-angular';
import { PropertyService } from '../../services/property.service';
import { HomePage } from '../home/home';
import { FilterService } from '../../services/filter.service';
import { RoomsPage } from '../rooms/rooms';

/*
  Generated class for the Rentals page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-rentals',
  templateUrl: 'rentals.html'
})

export class RentalsPage {
  properties: any;
  searchTerm: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, private propertyService: PropertyService) {
    menu.enable(true);
  }

  ngOnInit(){
    this.getProperites();
  }

  getProperites(){
    this.propertyService.getProperties().subscribe(response => {
      this.properties = response;
    })
  }

  goHome(){
    this.navCtrl.setRoot(HomePage);
  }

  viewRooms(property){
    this.navCtrl.push(RoomsPage, {
      property:property
    });
}
}
