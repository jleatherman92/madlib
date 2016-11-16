import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PlayLibsPage } from '../play-libs/play-libs';
import { MyLibsPage } from '../my-libs/my-libs';

import { LobbyPage } from '../lobby/lobby';



/*
  Generated class for the Settings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello SettingsPage Page');
  }
user = {
};
  
   updateForm(form) {
    if(form.invalid) 
      return alert("Please fill in all of the required fields.");

      this.navCtrl.push(PlayLibsPage);
      
      
   }
}
