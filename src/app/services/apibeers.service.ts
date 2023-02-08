import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Beer} from "../../model/beer";

@Injectable({
  providedIn: 'root'
})
export class ApibeersService {

  constructor(private httpClient: HttpClient) { }


  public getBeers() {
    return this.httpClient.get<Beer[]>('https://api.punkapi.com/v2/beers', {
      params : {
        page: '1'
      }
    });


  }

}
