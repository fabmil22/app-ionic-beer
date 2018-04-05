import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import {  NavController, NavParams, MenuController } from 'ionic-angular';
import { LoginPage } from './../login/login';
import { RegisterPage } from './../register/register';


@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
})
export class TutorialPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
    this.menu.enable(true, 'menu1');
    this.menu.enable(false, 'menu2');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TutorialPage');
  }

  openlinkLogin(){
    this.navCtrl.push(LoginPage)
  }

  openlinkREgister(){
    this.navCtrl.push(RegisterPage)
  }

  openlinkHOME(){
    this.navCtrl.push(HomePage)
  }

}
