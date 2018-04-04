import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

let photos=[
  {
    "photo": "https://placeimg.com/640/480/people/23"
  },
  {
    "photo": "https://placeimg.com/640/480/people/66"
  },
  {
    "photo": "https://placeimg.com/640/480/people/46"
  },
  
  {
    "photo": "https://placeimg.com/640/480/people/56"
  },
  {
    "photo": "https://placeimg.com/640/480/people/10"
  },
  {
    "photo": "https://placeimg.com/640/480/people/99"
  },
  {
    "photo": "https://placeimg.com/640/480/people/16"
  },
  
  {
    "photo": "https://placeimg.com/640/480/people/77"
  },
  {
    "photo": "https://placeimg.com/640/480/people/21"
  },
  {
    "photo": "https://placeimg.com/640/480/people/41"
  },
  {
    "photo": "https://placeimg.com/640/480/people/48"
  },
  
  {
    "photo": "https://placeimg.com/640/480/people/88"
  },
]
@Injectable()
export class PhotosProvider {

  constructor(public http: HttpClient) {
    console.log('Hello PhotosProvider Provider');
  }



  getPhoto(){

    return photos;
  }
}
