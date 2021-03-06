import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
    "gameName": "Sick Note",
    "gameText": `Dear School Nurse:<br>
My _ will not be attending school today. He/she has come down with a case of _ and can’t stop _ and has a/an _ fever. We have made an appointment with Dr. _, who studied for many years in _ and has _ degrees in pediatrics. He will send you all the information you need. Thank you! <br>
Sincerely<br>
Mrs. _`
  },
    {"gameNumber": 2,
    "gameName": "Personal Ad",
    "gameText": `I enjoy long, romantic walks on the _, getting caught in the rain and serendipitous encounters with _. I really like piña coladas and romantic, candle-lit Meals. I am well-read from Dr. Seuss to Alan King. I _ frequently, especially to West Virginia, when I am not _ with work. (I am a _.) I am looking for love and beauty in the form of a _. She must be _. I would prefer if she knew how to cook, clean, and wash my _. I know I’m not very attractive in my picture, but it was taken 123 45 6789 days ago, and I have since become more handsome. `},
    
    {"gameNumber": 3,
    "gameName": "How to Make PB+J",
    "gameText": `1. Select the type of _ you want to use. Many prefer the taste of white _, while others prefer wheat bread because it is healthy. <br>
                  2. _ the flavor of Jam/Jelly. I personally prefer strawberry jam, but you can use whatever you want. <br>
                  3. Choose the type of peanut butter - either _ or creamy. <br>
                  4. Take out 1.105 slice(s) of _. <br>
                  5. Use a _ to spread the jam all over on of the pieces of bread. <br>
                  6. Now put the peanut butter on the _ piece of bread. <br>
                  7. Put them together, and you have a PB&J _. `}
    ]

  constructor(public navCtrl: NavController,
              public Params: NavParams) {
  }

  ionViewDidLoad() {
    console.log('Hello PlayLibsPage Page');
  }
  goToWordList(story){
    console.log(story)
    this.navCtrl.push(WordListPage, {currentStory: story});
  }
}
