import { ListaUserPage } from './../pages/lista-user/lista-user';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserPage } from '../pages/user/user';
import { SettingsPage } from '../pages/settings/settings';
import { TimelinePage } from '../pages/timeline/timeline';
import { ProfilePage } from '../pages/profile/profile';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { TopPage } from '../pages/top/top';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { FormsModule } from '@angular/forms';
import { GridPage } from './../pages/grid/grid';
import { AlbunServiceProvider } from '../providers/albun-service/albun-service';
import { HttpClientModule } from '@angular/common/http';
import { AlbumDetaliPage } from '../pages/album-detali/album-detali';
import { UsersProvider } from '../providers/users/users';
import { UserListComponent } from '../components/user-list/user-list';
import { PhotosProvider } from '../providers/photos/photos';
import { PhotoPage } from '../pages/photo/photo';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    UserPage,
    SettingsPage,
    TimelinePage,
    ProfilePage,
    TutorialPage,
    TopPage,
    RegisterPage,
    LoginPage,
    GridPage,
    AlbumDetaliPage,
    UserPage,
    ListaUserPage,
    UserListComponent,
    PhotoPage
    
  ],
  imports: [
  

BrowserModule,
 FormsModule,
 HttpClientModule,
IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    UserPage,
    SettingsPage,
    TimelinePage,
    ProfilePage,
    TutorialPage,
    TopPage,
    RegisterPage,
    LoginPage,
    GridPage,
    AlbumDetaliPage,
    UserPage,
    ListaUserPage,
    PhotoPage
    

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AlbunServiceProvider,
    UsersProvider,
    PhotosProvider
  ]
})
export class AppModule {}
