import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the SelectStory page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-select-story',
  templateUrl: 'select-story.html'
})
export class SelectStoryPage {
  gameNumber: number;
  gameName: string;
  gameText: string;


  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello SelectStoryPage Page');
  }

}
