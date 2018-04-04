import { UsersProvider } from './../../providers/users/users';
import { Component } from '@angular/core';

/**
 * Generated class for the UserListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
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

  constructor( private serv: UsersProvider) {
    this.users = this.serv.getUserFriends(3);
  }
  ionViewDidLoad() {
  
  }

  Sendinvitation(item){

    console.log('ha sido invitado'+ JSON.stringify(item));
  }
}
