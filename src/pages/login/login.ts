import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

 myLogin : FormGroup;
 data: any ={};

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public formBulder: FormBuilder) {

                this.myLogin = this.formBulder.group({

                    user : ['',[Validators.required ,   Validators.pattern("^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$")] ,[]],
                    password : ['', Validators.pattern("[a-zA-Z0-9]+"),[]]

                })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  save(event: Event){
    event.preventDefault();
  
    console.log(this.data);
  }
}
