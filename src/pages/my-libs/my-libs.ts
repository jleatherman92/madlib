import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PlayLibsPage } from '../play-libs/play-libs';
import { SettingsPage } from '../settings/settings';


/*
  Generated class for the MyLibs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-my-libs',
  templateUrl: 'my-libs.html'
})
export class MyLibsPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello MyLibsPage Page');
  }

}
