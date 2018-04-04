import { PhotoPage } from './../photo/photo';
import { PhotosProvider } from './../../providers/photos/photos';
import { Component } from '@angular/core';
import {  NavController, NavParams ,  ModalController} from 'ionic-angular';


@Component({
  selector: 'page-album-detali',
  templateUrl: 'album-detali.html',
})
export class AlbumDetaliPage {
  imagen: any;
  albumAll: { "photo": string; }[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public serve: PhotosProvider, public modal:  ModalController) {
              this.albumAll = this.serve.getPhoto();
  }

  ionViewDidLoad() {

    
  }

  modalgalery(pho){
    console.log('ver modal' , pho);
    this.imagen = this.modal.create(PhotoPage);
    this.imagen.present();
  }
}
