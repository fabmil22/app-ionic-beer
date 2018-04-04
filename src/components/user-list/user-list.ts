import { UsersProvider } from './../../providers/users/users';
import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'user-list',
  template: `<h2>Mis Amigos</h2>
 <ion-list  *ngFor="let user of users">
  <ion-item-sliding   *ngFor="let friend of user.friend">
      <ion-item >
      {{friend.name}} {{friend.surname}}
          <ion-avatar item-left>
          <img src="{{friend.avatar}}">
          </ion-avatar>
      </ion-item>
      <ion-item-options side="right" >
          <button ion-button expandable (click)="Sendinvitation(friend)">
            <ion-icon name="star"></ion-icon> Invitar
          </button>
          <button ion-button expandable (click)="showConfirm()">
          <ion-icon name="call"></ion-icon> Call
        </button>
          <button ion-button expandable color="danger" (click)="Sendinvitation(friend)">
          <ion-icon name="cancel"></ion-icon> cancelar
        </button>
    </ion-item-options>
  </ion-item-sliding>


  </ion-list>



  `
})
export class UserListComponent {
  users: { "name": string; "surname": string; "email": string; "telefono": string; "direccion": string; "activo": string; }[];

  text: string;

  constructor( private serv: UsersProvider, public alert1: AlertController) {
    this.users = this.serv.getUserFriends(3);
  }
  ionViewDidLoad() {

  }

  Sendinvitation(item){
    let alert = this.alert1.create({
      title: 'Quieres invitar a tu amigo!',
      subTitle: 'INVITACION AL EVENTO GAMER',
      buttons: ['OK', 'CANCEL'],

    });
    alert.present();
    console.log('ha sido invitado'+ JSON.stringify(item));
  }

  showConfirm() {
    let confirm = this.alert1.create({
      title: 'DESEA LLAMAR A SU AMIGO',
      message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
      buttons: [
        {
          text: 'NO LLAMAR',
          handler: () => {
            console.log('NO HACER LLAMADA');
          }
        },
        {
          text: 'SI LLAMAR',
          handler: () => {
            console.log('HACER LLAMADA');
          }
        }
      ]
    });
    confirm.present();
  }
}
