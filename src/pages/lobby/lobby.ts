import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LandingPage } from '../landing/landing';

import { PlayLibsPage } from '../play-libs/play-libs';
import { MyLibsPage } from '../my-libs/my-libs';
import { SettingsPage } from '../settings/settings';
//import { WordListPage } from '../word-list/word-list';


//import { RestUsers } from '../../providers/rest-users';

/*
  Generated class for the Lobby page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-lobby',
  templateUrl: 'lobby.html',
  entryComponents: [PlayLibsPage, MyLibsPage, SettingsPage]
})  
export class LobbyPage {
  
  tab1Root = PlayLibsPage;
  tab2Root = MyLibsPage;
  tab3Root = SettingsPage;

  constructor(public navCtrl: NavController
              //public UsersRest: RestUsers
              ) {}

  ionViewDidLoad() {
    console.log('Hello LobbyPage Page');
  }
  logoutApp() {
    console.log('Hello LobbyPage Page');
    this.navCtrl.setRoot(LandingPage);
    
    // this.UsersRest.logout(window.localStorage.getItem('token'))
    // .map(res => res.json())
    // .subscribe(res => {
    //   window.localStorage.clear();
    //   this.navCtrl.setRoot(LandingPage);
    // }, err => {
    //   //because this is logging the user out, we don't need to worry about this here.
    //   // alert("Something went really wrong.");
    //   window.localStorage.clear();
    //   this.navCtrl.setRoot(LandingPage);
    // });
  }
  
}


