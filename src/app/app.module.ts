import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AuthHttp, AuthConfig, AUTH_PROVIDERS, provideAuth, JwtHelper, tokenNotExpired, } from 'angular2-jwt';
import { MomentModule } from 'angular2-moment';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MainPage } from '../pages/main/main';
import { RentalsPage } from '../pages/rentals/rentals';
import { RoomsPage } from '../pages/rooms/rooms';
import { UserPage } from '../pages/user/user';
import { Login2Page } from '../pages/login2/login2';
import { SignupPage } from '../pages/signup/signup';
import { BookingPage } from '../pages/booking/booking';
import { ConformationPage } from '../pages/conformation/conformation';
import { BookingModalPage } from '../pages/booking-modal/booking-modal';
import { PropertyService } from '../services/property.service';
import { FilterService } from '../services/filter.service';
import { RoomsService } from '../services/rooms.service';
import { provide } from 'angular2/core';
import { ReservationService } from '../services/reservation.service';
import { AuthService } from '../services/auth.service';
import {enableProdMode} from '@angular/core';
enableProdMode();

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MainPage,
    RentalsPage,
    RoomsPage,
    BookingPage,
    BookingModalPage,
    ConformationPage,
    Login2Page,
    SignupPage,
    UserPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    MomentModule
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
    RoomsPage,
    BookingPage,
    BookingModalPage,
    ConformationPage,
    Login2Page,
    SignupPage,
    UserPage
  ],
  providers: [ MomentModule, JwtHelper, AuthHttp, AuthService, ReservationService, RoomsService, PropertyService, {provide: ErrorHandler, useClass: IonicErrorHandler}, AuthHttp,
        provideAuth({
            headerName: 'Authorization',
            headerPrefix: '',
            tokenName: 'token',
            tokenGetter: (() => localStorage.getItem('token')),
            globalHeaders: [{ 'Content-Type': 'application/json' }],
            noJwtError: true
        })]
})
export class AppModule {}
