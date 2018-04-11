import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const ALBUMS = [
  
  {
    "userId": 1,
    "id": 2,
    "title": "Es culpa de la cerveza",
    "top":true,
    "albumS":"assets/imgs/2_uha8qg.jpg",
    "albumM":"assets/imgs/2_uha8qg (1).jpg",
    "albumG":"assets/imgs/2_uha8qg (2).jpg",
  },
  {
    "userId": 1,
    "id": 3,
    "title": "Al alamo con guinnes",
    "top":false,
    "albumS":"assets/imgs/2_uha8qg.jpg",
    "albumM":"assets/imgs/2_uha8qg (1).jpg",
    "albumG":"assets/imgs/2_uha8qg (2).jpg",
  },
  {
    "userId": 1,
    "id": 4,
    "title": "Mas pronto mejor",
    "top":false,
    "albumS":"assets/imgs/2_uha8qg.jpg",
    "albumM":"assets/imgs/2_uha8qg (1).jpg",
    "albumG":"assets/imgs/2_uha8qg (2).jpg",
  },
  {
    "userId": 1,
    "id": 5,
    "title": "salida de ostias",
    "top":false,
    "albumS":"assets/imgs/2_uha8qg.jpg",
    "albumM":"assets/imgs/2_uha8qg (1).jpg",
    "albumG":"assets/imgs/2_uha8qg (2).jpg",
  },
  {
    "userId": 1,
    "id": 6,
    "title": "Oh lala la vid",
    "top":true,
    "albumS":"assets/imgs/2_uha8qg.jpg",
    "albumM":"assets/imgs/2_uha8qg (1).jpg",
    "albumG":"assets/imgs/2_uha8qg (2).jpg",
  },
  {
    "userId": 1,
    "id": 1,
    "title": "centrados en el bar",
    "top":true,
    "albumS":"assets/imgs/2_uha8qg.jpg",
    "albumM":"assets/imgs/2_uha8qg (1).jpg",
    "albumG":"assets/imgs/2_uha8qg (2).jpg",
  },
  
];


@Injectable()
export class AlbunServiceProvider {

  url="https://jsonplaceholder.typicode.com/albums";

  constructor(public http: HttpClient) {
  
  }



  /**retorme  albunes de fotos */
  getAll():any{
     return this.http.get(this.url);
  }

/**retorme  albunes de fotos */
getAllTops():any{
  return ALBUMS.filter( res => res.top === true);
}


save(data){

 this.http.post(this.url  , data );
}
}
