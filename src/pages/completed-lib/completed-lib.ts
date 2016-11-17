import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PlayLibsPage } from '../play-libs/play-libs';
import { SelectStoryPage } from '../select-story/select-story';

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

  constructor(public navCtrl: NavController,
              public Params: NavParams) {}

finalStory: any = {
  currentStory: {
    gameText: ""
  }
};

  ionViewDidLoad() {
    console.log('Hello CompletedLibPage Page');
    this.finalStory=this.Params.data.currentStory;
    console.log(this.finalStory.currentStory.gameText);
    // var finalList="";
    // finalList=this.Params.data.list;
    
  }
   saveLib() {
  }
  playLib() {
    this.navCtrl.push(PlayLibsPage);
  }
}
