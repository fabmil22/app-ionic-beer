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
          <button ion-button expandable (click)="ConfirmInvit(friend)">
            <ion-icon name="star"></ion-icon> Invitar
          </button>
          <button ion-button expandable color="danger" (click)="ConfirmCall()">
          <ion-icon name="call"></ion-icon> call me
        </button>
    </ion-item-options>
  </ion-item-sliding>


  </ion-list>



  `
})
export class UserListComponent {
  users: { "name": string; "surname": string; "email": string; "telefono": string; "direccion": string; "activo": string; }[];

  text: string;

  constructor( private serv: UsersProvider ,
               private alertCntrl: AlertController) {
    this.users = this.serv.getUserFriends(3);
  }
  ionViewDidLoad() {

  }

  Sendinvitation(item){
    let alert = this.alertCntrl.create({
      title: 'Quieres invitar a tu amigo!',
      subTitle: 'INVITACION AL EVENTO GAMER',
      buttons: ['OK', 'CANCEL'],

    });
    alert.present();
    console.log('ha sido invitado'+ JSON.stringify(item));
  }

/**confirmar  si llama */

ConfirmCall() {
  let alert = this.alertCntrl.create({
    title: 'you  wish call',
    message: 'Do you want to call?',
    buttons: [
      {
        text: 'no, Llamar',
        role: 'cancel',
        handler: () => {
          console.log('no, llamar');
        }
      },
      {
        text: 'Si, llamar',
        handler: () => {
          console.log('hacer la llamar');
        }
      }
    ]
  });
  alert.present();
}

/**confirmar la invitacion */

ConfirmInvit(friend) {
  let alert = this.alertCntrl.create({
    title: 'you will invite your friend',
    message: 'you will make the invitation',
    buttons: [
      {
        text: 'No',
        role: 'cancel',
        handler: () => {
          console.log('no');
        }
      },
      {
        text: 'Si',
        handler: () => {
          console.log('hacer la llamar');
        }
      }
    ]
  });
  alert.present();
}
}
