import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomePage } from './../home/home';
import { TutorialPage } from './../tutorial/tutorial';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  gender:string;

  myForm :FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder : FormBuilder) {

    this.myForm= formBuilder.group({
      name: ['wewe', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      dateBirth: ['', Validators.required],
      passwordRetry: this.formBuilder.group({
        password: ['', Validators.required],
        passwordConfirmation: ['', Validators.required]
      }),
      gender: ['1', Validators.required],
    });
      
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  
  


  gotohome(){
    this.navCtrl.push(TutorialPage);
  }
  saveData(event: Event){
    event.preventDefault();
    console.log(this.myForm.value);
  }
}
