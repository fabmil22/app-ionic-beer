import { LocalstorageProvider } from './../../providers/localstorage/localstorage';

import { Component } from '@angular/core';
import {  NavController, NavParams, AlertController } from 'ionic-angular';



@Component({
  selector: 'page-tasklocal',
  templateUrl: 'tasklocal.html',
})
export class TasklocalPage {

  task: any[] = [];

  constructor(
     public navCtrl: NavController,
     public navParams: NavParams ,
     public storageserve : LocalstorageProvider,
     private alertCtrol : AlertController) {



  }

  ionViewDidLoad() {
    this.storageserve.getTask().then((task: any) => {

      console.log( 'trae'+ task );
     if( task){
        this.task = JSON.parse(task);} }).catch( error=> console.log(error));
  }



  Onchange(task){
   task.completed = !task.completed;
   this.storageserve.savetack(this.task);

  }
  saveTask() {
    let prompt = this.alertCtrol.create({
      title: 'AGREGAR TAREA',
      message: "AGREGUE UNA TAREA",
      inputs: [
        {
          name: 'title',
          placeholder: 'title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            let newTask ={
              title: data.title,
              completed: false
            }
            this.task.push(newTask);
            this.storageserve.savetack(this.task).then(
              resul => console.log(resul)
            ).catch (
              error => console.log(error)
            )

          }
        }
      ]
    });
    prompt.present();
  }


  UpdateTask() {
    let prompt = this.alertCtrol.create({
      title: 'editar TAREA',
      message: "AGREGUE UNA TAREA",
      inputs: [
        {
          name: 'title',
          placeholder: 'title',
          value: tasks.title
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {

              tasks.title = data.title,


            this.storageserve.savetack(this.task).then(
              resul => this.task[index] = resul
            ).catch (
              error => console.log(error)
            )

          }
        }
      ]
    });
    prompt.present();
  }

}
