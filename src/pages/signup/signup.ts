import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MainPage } from '../main/main';
import { HomePage } from '../home/home';
import { AuthService } from '../../services/auth.service';

/*
  Generated class for the Signup page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  email:any;
  password:any;
  firstName:any;
  lastName:any;
  newMember:any;
  response:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthService) {
    this.newMember = {
      firstName:this.firstName,
      lastName:this.lastName,
      email:this.email,
      password:this.password
    }
  }

  signup(){
    this.authService.signup(this.newMember)
      .then(res => {
        if(res.status == 200){
          this.response = JSON.parse(res._body)
          localStorage.setItem('email', this.response.member[0].email);
          localStorage.setItem('firstName', this.response.member[0].firstName);
          localStorage.setItem('lastName', this.response.member[0].lastName);
          localStorage.setItem('id', this.response.member[0].id);
          localStorage.setItem('token', this.response.token);
          this.navCtrl.setRoot(MainPage);
        }else{
          alert('Invaild login please try again');
        }
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  goHome(){
    this.navCtrl.setRoot(MainPage);
  }

}
