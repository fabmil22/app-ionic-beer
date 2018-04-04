import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { UserListComponent } from '../../components/user-list/user-list';

@Component({
  selector: 'page-lista-user',
  templateUrl: 'lista-user.html',
})
export class ListaUserPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaUserPage');
  }

}
