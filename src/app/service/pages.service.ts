import { getSafePropertyAccessString } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PagesService {
   mentions = "test";

  constructor() { }
}



