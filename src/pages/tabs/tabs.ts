import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { TutorialPage } from '../tutorial/tutorial';
import { TimelinePage } from '../timeline/timeline';
import { LoginPage } from './../login/login';
import { RegisterPage } from '../register/register';
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
