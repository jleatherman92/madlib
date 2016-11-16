import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MyLibsPage } from '../my-libs/my-libs';
import { SettingsPage } from '../settings/settings';

import { SelectStoryPage } from '../select-story/select-story';
import { WordListPage } from '../word-list/word-list';


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
  stories: any [] = [{
    "gameNumber": 1,
    "gameName": "Game One",
    "gameText": `Dear School Nurse,
    _ will not be attending school today. He/she has come down with a case of _ and has horrible _ and a/an _ fever. We have made an appointment with the _ Dr. _, who studied for many years in _ and has _ degrees in pediatrics. He will send you all the information you need. Thank you!
Sincerely,
Mrs. _ `
  },
    {"gameNumber": 2,
    "gameName": "Game Two",
    "gameText": "Here is a second random story that never ends...."},
    
    {"gameNumber": 3,
    "gameName": "Game Three",
    "gameText": "Here is a third random story that never ends...."}
    ]

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('Hello PlayLibsPage Page');
  }
  goToWordList(){
    this.navCtrl.push(WordListPage);
  }
}
