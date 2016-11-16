import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MyLibsPage } from '../my-libs/my-libs';
import { SettingsPage } from '../settings/settings';

import { SelectStoryPage } from '../select-story/select-story';
import { CompletedLibPage } from '../completed-lib/completed-lib';

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
  lists: any []= [{
    "listNumber": 1,
    "listText": ["daughter", "hiccups", "running", "hot", "banana", "note", "quick", "school"]
  },
  
    {"listNumber": 2,
    "listText": ["bottle", "stapler", "recite", "horrible", "towel", "head", "firm", "grapefruit"]
    },
    
    {"listNumber": 3,
    "listText": ["part", "flower", "rap", "horrible", "radius", "waste", "mysterious", "business"]}
    ]
  
  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    console.log('Hello WordListPage Page');
  }
  goToViewFinal(){
  this.navCtrl.push(CompletedLibPage);
  }
}
