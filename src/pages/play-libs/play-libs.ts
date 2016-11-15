import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the PlayLibs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-play-libs',
  templateUrl: 'play-libs.html'
})
export class PlayLibsPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello PlayLibsPage Page');
  }

}
