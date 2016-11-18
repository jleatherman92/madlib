import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
    "listText": ["DAUGHTER", "HICCUPS", "RUNNING", "HOT", "BANANA", "NOTE", "PROFOUND", "SCHOOL"]
  },
  
    {"listNumber": 2,
    "listText": ["BOTTLE", "STAPLER", "RECITE", "HORRIBLE", "TOWEL", "HEAD", "FIRM", "GRAPEFRUIT"]
    },
    
    {"listNumber": 3,
    "listText": ["PART", "FLOWER", "RAP", "LENGTHY", "RADIUS", "WASTE", "MYSTERIOUS", "FISH"]}
    ]
  
  constructor(public navCtrl: NavController,
              public Params: NavParams) {

  }
  


story: any;

  ionViewDidLoad() {
    console.log('Hello WordListPage Page');
    this.story = this.Params.data;
  }
  goToViewFinal(list, story){
  let strArr = story.currentStory.gameText.split("_");
  console.log(strArr);
    console.log(list);
  this.navCtrl.push(CompletedLibPage, {currentList: list, currentStory: this.story});
  }
}
