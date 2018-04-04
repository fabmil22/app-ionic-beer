import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlbunServiceProvider } from '../../providers/albun-service/albun-service';

/**
 * Generated class for the TopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-top',
  templateUrl: 'top.html',
})
export class TopPage {
  searchQuery: string = '';
  items: any[]=[{



  }

];


  constructor(public navCtrl: NavController, public navParams: NavParams, private serve: AlbunServiceProvider) {
    
  }

  ionViewDidLoad() {
    this.initializeItems();
  }

  initializeItems() {
    this.items = this.serve.getAllTops();
  }


  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
     

      this.items = this.items.filter((album) => {
        return (album.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })

    }
  }


  /**votar(item)
   * 
   * function que se usa para la votacion
   */
  votar(item){
    
  }
  

}
