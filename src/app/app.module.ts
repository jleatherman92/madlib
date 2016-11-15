import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { LandingPage } from '../pages/landing/landing';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { LobbyPage } from '../pages/lobby/lobby';

import { PlayLibsPage } from '../pages/play-libs/play-libs';
import { MyLibsPage } from '../pages/my-libs/my-libs';
import { SettingsPage } from '../pages/settings/settings';
import { SelectStoryPage } from '../pages/select-story/select-story';
import { WordListPage } from '../pages/word-list/word-list';


//import { RestUsers } from '../providers/rest-users';

const injections = [
  MyApp,
  LandingPage,
  LoginPage,
  RegisterPage,
  LobbyPage,
  PlayLibsPage,
  MyLibsPage,
  SettingsPage,
  SelectStoryPage,
  WordListPage]

@NgModule({
  declarations: injections,
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: injections,
  providers: [
    //RestUsers
    ]
})
export class AppModule {}
