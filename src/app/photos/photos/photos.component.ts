import { PhotoService } from './../photo.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../photos.model';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photo$: Observable<Photo[]>

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    this.photo$ = this.photoService.getPhotos();
  }
  

}
