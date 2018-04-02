import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlbumDetaliPage } from './album-detali';

@NgModule({
  declarations: [
    AlbumDetaliPage,
  ],
  imports: [
    IonicPageModule.forChild(AlbumDetaliPage),
  ],
})
export class AlbumDetaliPageModule {}
