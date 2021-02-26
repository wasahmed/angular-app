import { Photo } from './photos.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private ROOT_URL = 'http://localhost:3000/photos'
  
  constructor(private http: HttpClient) { }

  getPhotos(){
    return this.http.get<Photo[]>(this.ROOT_URL)
  }
}
