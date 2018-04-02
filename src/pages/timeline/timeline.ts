import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlbunServiceProvider } from '../../providers/albun-service/albun-service';
import { AlbumDetaliPage } from '../album-detali/album-detali';

/**
 * Generated class for the TimelinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
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
