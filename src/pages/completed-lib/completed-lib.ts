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

// finalStory: any = {
//   currentStory: {
//     gameText: ""
//   }
// };

// finalText: any = {
//   listText: ""
// };




  ionViewDidLoad() {
    // console.log('Hello CompletedLibPage Page');
    // console.log(this.finalStory.currentStory.gameText);
    // console.log(this.Params.data);
    // console.log(this.finalText.listText);
  }
  // splitLib(){
  //   console.log("does it work?");
  // }
  // this.splitLib()
  finalStory=this.Params.data.currentStory;
  finalText=this.Params.data.currentList;
  

   saveLib() {
  
  }
  
  playLib() {
    this.navCtrl.push(PlayLibsPage);
  }
}
