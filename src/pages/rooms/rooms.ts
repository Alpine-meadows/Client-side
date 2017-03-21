import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { MainPage } from '../main/main';
import { RoomsService } from '../../services/rooms.service';
import { BookingPage } from '../booking/booking';


/*
  Generated class for the Rooms page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-rooms',
  templateUrl: 'rooms.html'
})
export class RoomsPage {
  property: any;
  rooms: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private roomsService: RoomsService) {
    this.property = navParams.get('property');
  }

  getRooms(){
    this.roomsService.getRooms(this.property.id).subscribe(response => {
      this.rooms = response;
    })
  }

  ngOnInit(){
    this.getRooms();
  }
  goHome(){
    this.navCtrl.setRoot(MainPage);
  }

  bookRoom(property, room){
    this.navCtrl.push(BookingPage, {
      property:property,
      room:room
    });
  }

}
