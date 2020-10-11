import {Component, Input, OnInit} from '@angular/core';
import {HeaderCells} from '../grid-header/grid-header.component';
import {Model} from '../../data/model';

@Component({
  selector: 'app-grid',
  template: `
    <div [style.width.px]="getRowWidth()">
      <app-grid-header [cells]="cells"></app-grid-header>
      <div *ngFor="let x of data">
        <app-grid-row [data]="x" [cells]="cells"></app-grid-row>
      </div>
    </div>
  `,
  styles: []
})
export class GridComponent implements OnInit {

  @Input()
  cells: HeaderCells = [];

  @Input()
  data: Array<Model> = [];

  constructor() { }

  ngOnInit(): void {
  }

  getRowWidth(): number {
    return this.cells.reduce((previousValue, currentValue) => previousValue + currentValue.width, 0);
  }

}
