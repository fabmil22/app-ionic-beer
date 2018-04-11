import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { AlbunServiceProvider } from '../../providers/albun-service/albun-service';
import { AlbumDetaliPage } from '../album-detali/album-detali';


@Component({
  selector: 'page-timeline',
  templateUrl: 'timeline.html',
})
export class TimelinePage {

  public albunes:any[] = [];
 
  constructor(  public navCtrl: NavController, 
                public navParams: NavParams, 
                private serve: AlbunServiceProvider,
                public  load: LoadingController,
                public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    let load = this.load.create({
      content: `cargando ...`,
      spinner: 'dots'
    });
    load.present();
      this.serve.getAll().subscribe(
          res => this.albunes =res,
          error => console.log(error)

      )
        load.dismiss();
     
   

  }

  goToAlbumDetailPage(){
    
    this.navCtrl.push(AlbumDetaliPage);
  }


  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'crea  tu album',
      message: "Enter a name for this new album",
      inputs: [
        {
          name: 'evento',
          placeholder: 'Title',
          type:'text'
        },
        {
          name: 'fecha',
          placeholder: 'Title',
          type:'date'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
            console.log(data);
          }
        }
      ]
    });
    prompt.present();
  }
}
