import { UserPage } from './../user/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { InvitationProvider } from '../../providers/invitation/invitation';
import { ListaUserPage } from '../lista-user/lista-user';

/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {
  numero: any;
  invitations: { 'idevent': number; 'promoter': string; 'fecha': string; 'hora': string; 'commit': string; 'aceptes': { 'friend': string; 'id': number; }[]; }[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public invi:InvitationProvider) {
  }

  ionViewDidLoad() {
  
this.invitations = this.invi.getALLintitation();
  }

  invitar(){
    this.navCtrl.push(ListaUserPage);
  }



}
