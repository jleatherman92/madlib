import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the WordList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-word-list',
  templateUrl: 'word-list.html'
})
export class WordListPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello WordListPage Page');
  }

}
