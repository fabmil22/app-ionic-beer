import { Component } from '@angular/core';
import {  NavController, NavParams, LoadingController } from 'ionic-angular';
import { AlbunServiceProvider } from '../../providers/albun-service/albun-service';
import { AlbumDetaliPage } from '../album-detali/album-detali';
import 'rxjs/add/operator/delay'

@Component({
  selector: 'page-timeline',
  templateUrl: 'timeline.html',
})
export class TimelinePage {

  public albunes:any[] = [];
 
  constructor(  public navCtrl: NavController, 
                public navParams: NavParams, 
                private serve: AlbunServiceProvider,
                public  load: LoadingController) {
  }

  ionViewDidLoad() {
    let load = this.load.create({
      content: `
      <div class="custom-spinner-container">
        <div class="custom-spinner-box"></div>
      </div>`,
      spinner: 'dots'
    });
    load.present();
      setTimeout( ()=>{
        this.albunes = this.serve.getAll();
        load.dismiss();
      },  5000);
   

  }

  goToAlbumDetailPage(){
    
    this.navCtrl.push(AlbumDetaliPage);
  }
}
