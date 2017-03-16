import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MainPage } from '../pages/main/main';
import { RentalsPage } from '../pages/rentals/rentals';
import { RoomsPage } from '../pages/rooms/rooms';
import { PropertyService } from '../services/property.service';
import { FilterService } from '../services/filter.service';
import { RoomsService } from '../services/rooms.service';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MainPage,
    RentalsPage,
    RoomsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MainPage,
    RentalsPage,
    RoomsPage
  ],
  providers: [ RoomsService, PropertyService, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
