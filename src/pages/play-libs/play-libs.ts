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
    "gameText": "Here is a random story that never ends...."
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
