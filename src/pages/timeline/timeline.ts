import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { AlbunServiceProvider } from '../../providers/albun-service/albun-service';
import { AlbumDetaliPage } from '../album-detali/album-detali';


@Component({
  selector: 'page-timeline',
  templateUrl: 'timeline.html',
})
export class TimelinePage {

  public albunes:any[] = [];
 
  constructor(public navCtrl: NavController, public navParams: NavParams, private serve: AlbunServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimelinePage');
   this.albunes = this.serve.getAll();

  }

  goToAlbumDetailPage(){

    this.navCtrl.push(AlbumDetaliPage);
  }
}
