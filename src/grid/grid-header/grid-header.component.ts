import {Component, Input, OnInit} from '@angular/core';
import {Model} from '../../data/model';

export interface HeaderCell {
  readonly name: keyof Model;
  readonly width: number;
}

export type HeaderCells = Array<HeaderCell>;


@Component({
  selector: 'app-grid-header',
  template: `
    <div class="grid-header-row">
      <app-grid-header-cell *ngFor="let cell of cells" [name]="cell.name" [width]="cell.width"></app-grid-header-cell>
    </div>
  `,
  styles: [`
    .grid-header-row {
      display: flex;
      font-family: monospace;
      height: 40px;
      border-color: gray;
      border-width: 1px 1px 1px 0;
      border-style: solid;
      background: lightgray;
      width: 100%;
    }
  `]
})
export class GridHeaderComponent implements OnInit {

  @Input()
  cells: HeaderCells = [];

  constructor() { }

  ngOnInit(): void {
  }

}
