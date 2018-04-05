import { Component } from '@angular/core';
import {  NavController, NavParams ,MenuController, ActionSheetController} from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public menu: MenuController ,
              private actionSheetCtrl: ActionSheetController) {

    this.menu.enable(false, 'menu1');
    this.menu.enable(true, 'menu2');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }


 

  more() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Mas sobre nosotros',
      buttons: [
        {
          text: 'Nuestra comunidad',
          role: 'Comunidad',
          handler: () => {
            console.log('informacion de la comunidad');
          }
        },
        {
          text: 'Nuestras politicas',
          handler: () => {
            console.log('Politicas');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
 
    actionSheet.present();
  }

  callredsocial(red){

    console.log('llamado de red  '+red)
  }

}
