import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MainPage } from '../main/main';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
import { AuthService } from '../../services/auth.service';
/*
  Generated class for the Login2 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login2',
  templateUrl: 'login2.html'
})
export class Login2Page {
  email:any;
  password:any;
  member:any;
  response:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthService) {
    this.member = {
      email:this.email,
      password:this.password
    }
  }

  login(){
    this.authService.login(this.member)
      .then(res => {
        if(res.status == 200){
          this.response = JSON.parse(res._body)
          localStorage.setItem('email', this.response.member.email);
          localStorage.setItem('firstName', this.response.member.firstName);
          localStorage.setItem('lastName', this.response.member.lastName);
          localStorage.setItem('id', this.response.member.id);
          localStorage.setItem('token', this.response.token);
          this.navCtrl.setRoot(MainPage);
        }else if (res.status == 500){
          alert('Invaild login please try again');
          this.navCtrl.setRoot(Login2Page);
        }
      })
  }

  goHome(){
    this.navCtrl.setRoot(MainPage);
  }

  goSignup(){
    this.navCtrl.setRoot(SignupPage);
  }

}
