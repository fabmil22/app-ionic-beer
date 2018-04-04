import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaUserPage } from './lista-user';

@NgModule({
  declarations: [
    ListaUserPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaUserPage),
  ],
})
export class ListaUserPageModule {}
