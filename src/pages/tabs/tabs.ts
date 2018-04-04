import { Component } from '@angular/core';


import { HomePage } from '../home/home';
import { TimelinePage } from '../timeline/timeline';
import { TopPage } from './../top/top';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root =  TimelinePage;
  tab3Root = TopPage;
  tab4Root = ProfilePage;

  constructor() {

  }
}
