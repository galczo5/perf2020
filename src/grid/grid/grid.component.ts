import {Component, HostBinding, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {HeaderCells} from '../grid-header/grid-header.component';
import {Model} from '../../data/model';

@Component({
  selector: 'app-grid',
  template: `
    <app-grid-header [cells]="cells"></app-grid-header>
    <app-grid-row *ngFor="let x of data" [data]="x" [cells]="cells"></app-grid-row>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class GridComponent implements OnInit, OnChanges {

  @Input()
  cells: HeaderCells = [];

  @Input()
  data: Array<Model> = [];

  @HostBinding('style.width.px')
  width: number;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes.data && changes.data.currentValue) {
      this.width = this.getRowWidth();
    }

  }

  getRowWidth(): number {
    return this.cells.reduce((previousValue, currentValue) => previousValue + currentValue.width, 0);
  }

}
