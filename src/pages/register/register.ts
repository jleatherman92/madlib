import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LobbyPage } from '../lobby/lobby';

//import { RestUsers } from '../../providers/rest-users';

/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello RegisterPage Page');
  }
  
  
  user = {};
  
   signupForm(form) {
    if(form.invalid) 
      return alert("Please fill in all of the required fields.");
      
      this.navCtrl.push(LobbyPage);
    
    // this.SSFUsersRest.register(this.user)
    // .map(res => res.json())
    // .subscribe(res => {
    //   window.localStorage.setItem('token', res.token);
    //   window.localStorage.setItem('userId', res.id);
    //   this.navCtrl.setRoot(Lobby);
    // }, err => {
    //   alert("Warning Will Robinson!");
    // });
  }
}
