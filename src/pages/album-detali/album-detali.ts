import { PhotosProvider } from './../../providers/photos/photos';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-album-detali',
  templateUrl: 'album-detali.html',
})
export class AlbumDetaliPage {
  albumAll: { "photo": string; }[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public serve: PhotosProvider) {
    this.albumAll = this.serve.getPhoto();
  }

  ionViewDidLoad() {

    
  }

}
