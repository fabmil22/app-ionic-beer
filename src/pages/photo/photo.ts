import { Component } from '@angular/core';
import {  NavController, NavParams ,ViewController } from 'ionic-angular';


@Component({
  selector: 'page-photo',
  templateUrl: 'photo.html',
})
export class PhotoPage {

  photoselect="https://placeimg.com/640/480/people/2";

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewphoto: ViewController) {


  }

  ionViewDidLoad() {

 this.photoselect= this.navParams.get('photo');
 console.log(this.photoselect);
  }


  close(){
    let dato = 'medida completa';
    this.viewphoto.dismiss({ dataInfo : dato })
  }
}
