import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TasklocalPage } from './tasklocal';

@NgModule({
  declarations: [
    TasklocalPage,
  ],
  imports: [
    IonicPageModule.forChild(TasklocalPage),
  ],
})
export class TasklocalPageModule {}
