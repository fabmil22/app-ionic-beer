
import {  AbstractControl } from '@angular/forms';

export class MyValidations{

static older( control: AbstractControl){
 let value = control.value;
 
 if( value >= 18){
    return null;
} else{
    return {'older' : true}
} 

}



}