import { Component } from '@angular/core';
import { ApibeersService } from './services/apibeers.service';
import { Beer } from "../model/beer";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public beers: Beer[] = [];

  constructor(private apibeersService: ApibeersService) {
    this.fetchProducts();
  }

  public fetchProducts() {
    this.apibeersService.getBeers().subscribe((beers: Beer[]) => {
      this.beers = beers
      //   .sort((a, b) => {
      //   if (a.first_brewed > b.first_brewed) {
      //     return -1;
      //   }
      //   if (a.first_brewed < b.first_brewed) {
      //     return 1;
      //   }
      //   return 0;
      // });
        console.log(this.beers);
    });
  }


}

