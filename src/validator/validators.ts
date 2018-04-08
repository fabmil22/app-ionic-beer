
import { Control } from '@angular/common';
export class MyValidations{

static older(){
 let diferencia = 18;

 if( diferencia >= 18)
   return {

    older : true,
   }
}

}
