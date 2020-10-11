import {Component, Input, OnInit} from '@angular/core';
import {Model} from '../../../data/model';

@Component({
  selector: 'app-grid-city-cell',
  template: `
    <div class="grid-city" [style.width.px]="width">
      <i>{{ getCity() }}</i>
    </div>
  `,
  styles: [`
    .grid-city {
      padding: 0 10px;
    }
  `]
})
export class GridCityCellComponent implements OnInit {

  @Input()
  width: number;

  @Input()
  data: Model;

  constructor() { }

  ngOnInit(): void {
  }

  getCity(): string {
    return this.data.city;
  }

}
