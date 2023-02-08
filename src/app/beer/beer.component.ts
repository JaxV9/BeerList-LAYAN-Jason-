import { Component, OnInit, Input, Output } from '@angular/core';
import { Beer } from '../../model/beer';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})

export class BeerComponent implements OnInit {


  //@ts-ignore
  @Input() beer: Beer;

  constructor() { }

  ngOnInit(): void {
    console.log('Init beer ${this.beer.id}');
  }
}
