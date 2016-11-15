import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the CompletedLib page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-completed-lib',
  templateUrl: 'completed-lib.html'
})
export class CompletedLibPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello CompletedLibPage Page');
  }

}
