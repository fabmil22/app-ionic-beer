
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
/*
  Generated class for the LocalstorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocalstorageProvider {


  key:string ='tasks';
  constructor(  public storegaCont : Storage) {

  }


  savetack( task: any[]){
    return this.storegaCont.set( this.key , JSON.stringify(task));
  }

  getTask(){
    return this.storegaCont.get(this.key);
  }
}
