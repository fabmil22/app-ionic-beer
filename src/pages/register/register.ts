
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TutorialPage } from './../tutorial/tutorial';
import { of as observableOf } from 'rxjs/observable/of';
import { map } from 'rxjs/operators/map';

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
      name: ['', [Validators.required , Validators.minLength(3) , Validators.pattern('[a-zA-Z]*')],[]],
      lastName: ['', Validators.required , [] ],
      email: ['', [Validators.required ,   Validators.pattern("^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$")] ,[]],
      
      age :['',[Validators.required], this.validEdad.bind(this)],
      passwordRetry: this.formBuilder.group({
        password: ['', Validators.required],
        passwordConfirmation: ['', Validators.required]
      } ,  {'validator': this.isMatching}),
      gender: ['', Validators.required],
    });
   let obj={
    'name':'fabian',
    'lastName':'fabian',
    'email':'correo@hotmail.com',
    'age':18,
    'gender':1
   }
   this.myForm.patchValue(obj);


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  validEdad(control: AbstractControl) {
    return observableOf( 17 > control.value).pipe(
      map(result => result ? { invalid: true } : null)
    );
  }

  validarPassword(grupo: AbstractControl) {
    let password = grupo.get('password').value;
    let confirmacion = grupo.get('passwordConfirmation').value;

    return observableOf( password === confirmacion).pipe(
      map(result => result ? { invalid: true } : null)
    );
  }

  isMatching(group: FormGroup){
    
        console.log("password check");
    
        var firstPassword = group.controls['password'].value;
        var secondPassword = group.controls['passwordConfirmation'].value;
        if((firstPassword && secondPassword) && (firstPassword != secondPassword)){
          console.log("mismatch");
          return { "pw_mismatch": true };
        } else{
          return null;
        }
    
      }


  gotohome(){
    this.navCtrl.push(TutorialPage);
  }


  saveData(event: Event){
    event.preventDefault();
    console.log(this.myForm.value);

  }
}
