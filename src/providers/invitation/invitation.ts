import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

let invitations = [
  {
   'idevent': 1,
   'promoter' : 'Miguel',
   'fecha':'Mayo 12, 2018',
   'hora': '12:30',
   'commit':"Wait a minute. Wait a minute,Doc. Uhhh... Are you telling me that you built atime machine... out of a DeLorean?! Whoa. This is heavy.",
   'aceptes' :[
     { 'friend':'fabian', 'id': 1},{ 'friend':'Mariana', 'id': 1}
   ]
  },
  {
    'idevent': 2,
   'promoter' : 'Jose Miliani',
   'fecha':'Junio 12, 2018',
   'hora': '12:30',
   'commit':"Wait a minute. Wait a minute,Doc. Uhhh... Are you telling me that you built atime machine... out of a DeLorean?! Whoa. This is heavy.",
   'aceptes' :[
     { 'friend':'fabian', 'id': 1},{ 'friend':'Mariana', 'id': 1}
   ]
  }

];


@Injectable()
export class InvitationProvider {

  constructor(public http: HttpClient) {
    console.log('Hello InvitationProvider Provider');
  }

 getALLintitation(){
   return invitations;
 }

 


}
