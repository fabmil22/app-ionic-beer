import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const USERS =[
  {
    "id":1,
    "name": "fabian1",
    "surname": "miliani",
    "email": "fabmil22@gmail.com",
    "telefono": "43433434",
    "direccion": "call3  navarro 2",
    "activo": "true",
    "friend" :[{
      "name": "fabian1",
      "surname": "miliani",
      "email": "fabmil22@gmail.com",
      "telefono": "43433434",
      "direccion": "call3  navarro 2",
      "activo": "true",
      "avatar":"assets/imgs/victor.jpg"

    },
    {
      "name": "ivan",
      "surname": "fernandez",
      "email": "ivan@gmail.com",
      "telefono": "43433434",
      "direccion": "call3  navarro 2",
      "activo": "true",
      "avatar":"assets/imgs/ivan.jpg"

    }
  ],

    
  },

  {
    "id":2,
    "name": "Jose",
    "surname": "miliani",
    "email": "josemiliani@gmail.com",
    "telefono": "45534434",
    "direccion": "call 45  toi",
    "activo": "true",
    "friend" :[{
      "name": "fabian2",
      "surname": "miliani",
      "email": "fabmil22@gmail.com",
      "telefono": "43433434",
      "direccion": "call3  navarro 2",
      "activo": "true",
    "avatar":"assets/imgs/avatar.jpg"},
      {
        "name": "fabian3",
        "surname": "miliani",
        "email": "fabmil22@gmail.com",
        "telefono": "43433434",
        "direccion": "call3  navarro 2",
        "activo": "true",
        "avatar":"assets/imgs/avatar.jpg"
  
      }]

  
  },
  {
    "id":3,
    "name": "Victor",
    "surname": "bedmar",
    "email": "Victorbernan@gmail.com",
    "telefono": "47774434",
    "direccion": "call 45  toi",
    "activo": "true",
    "friend" :[{
      "name": "fabian",
      "surname": "miliani",
      "email": "fabmil22@gmail.com",
      "telefono": "43433434",
      "direccion": "call3  navarro 2",
      "activo": "true",
    "avatar":"assets/imgs/avatar.jpg"},
      {
        "name": "Victor",
        "surname": "Bedmar",
        "email": "victor@gmail.com",
        "telefono": "43433434",
        "direccion": "call3  navarro 2",
        "activo": "true",
        "avatar":"assets/imgs/victor.jpg"
  
      },
      {
        "name": "Ivan",
        "surname": "fernandez",
        "email": "ivan@gmail.com",
        "telefono": "43433434",
        "direccion": "call3  navarro 2",
        "activo": "true",
        "avatar":"assets/imgs/ivan.jpg"
  
  

    }]
  }
]


@Injectable()
export class UsersProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UsersProvider Provider');
  }


  getUserall(){
     return USERS;
  }
  getUserFriends(id){
    return USERS.filter(res => res.id=== id)
 }

}
