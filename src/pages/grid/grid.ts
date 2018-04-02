import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the GridPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-grid',
  templateUrl: 'grid.html',
})
export class GridPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
    this.menu.enable(false, 'menu1');
    this.menu.enable(true, 'menu2');
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GridPage');
  }

}
