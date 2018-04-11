import { UsersProvider } from './../../providers/users/users';
import { Component } from '@angular/core';
import { AlertController, LoadingController } from 'ionic-angular';

@Component({
  selector: 'user-list',
  template: `<h2>Mis Amigos</h2>
  
 <ion-list >
  <ion-item-sliding   *ngFor="let friend of users">
      <ion-item >
      {{friend.name.first}} {{friend.name.last}}
          <ion-avatar item-left>
          <img src="{{friend.picture.medium}}">
          </ion-avatar>
      </ion-item>
      <ion-item-options side="right" >
          <button ion-button expandable (click)="ConfirmInvit(friend)">
            <ion-icon name="star" ></ion-icon> Invitar
          </button>
          <button ion-button expandable color="danger" (click)="ConfirmCall(friend.cell)">
          <ion-icon name="call" ></ion-icon> call me
        </button>
    </ion-item-options>
  </ion-item-sliding>


  </ion-list>



  `
})
export class UserListComponent {
  users:any;

  text: string;

  constructor( private serv: UsersProvider ,
               private alertCntrl: AlertController,
               public loadctrls : LoadingController) {
                let  load = this.loadctrls.create();
                load.present();
             this.serv.getUserall().subscribe(
               res =>{ this.users= res.results;
                 load.dismiss();
               
               
              },
               error => {console.log(error);
                           load.dismiss();}
          
              );
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

ConfirmCall(cell) {
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
        text: 'Si, llamar al' + cell,
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
