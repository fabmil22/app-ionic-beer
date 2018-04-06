import { CalendarPage } from './../pages/calendar/calendar';
import { ListaUserPage } from './../pages/lista-user/lista-user';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { TabsPage } from '../pages/tabs/tabs';
import { TimelinePage } from './../pages/timeline/timeline';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { UserPage } from './../pages/user/user';
import { LoginPage } from './../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from './../pages/home/home';
import { TopPageModule } from '../pages/top/top.module';
import { GridPage } from './../pages/grid/grid';
import { TopPage } from './../pages/top/top';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TutorialPage;

  pages=[

    {  titulo: "Principal",
       component:TutorialPage,
       icon:'home' },
       {  titulo: "Login",
       component:LoginPage,
       icon:'hand' },
       {  titulo: "Registro",
       component: RegisterPage,
       icon:'person' },
       {  titulo: "home",
       component:TabsPage,
       icon:'home' }
  ]
  pagesadentro =[

    {  titulo: "home",
       component:TabsPage,
       icon:'home' },
       {  titulo: "Timeline",
       component:TimelinePage,
       icon:'time' },
       {  titulo: "top",
       component: TopPage,
       icon:'start' },
       {titulo: "Lista de amigos",
       component: ListaUserPage,
       icon:'person' },
       {titulo: "Calendar",
       component:CalendarPage,
       icon:'time' }

  ]
  

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page) {
   this.rootPage= page.component;
  console.log(page.component);
  }

}
