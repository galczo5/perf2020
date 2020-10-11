import {Component, Input, OnInit} from '@angular/core';
import {Model} from '../../../data/model';

@Component({
  selector: 'app-grid-color-cell',
  template: `
    <div class="grid-color" [style.width.px]="width">
      <span [style.background]="data.color.toLocaleLowerCase()" class="grid-color-circle"></span>
      <div>
        {{ getColor() }}
      </div>
    </div>
  `,
  styles: [`
    .grid-color {
      padding: 0 10px;
      display: flex;
      align-items: center;
    }

    .grid-color-circle {
      width: 10px;
      height: 10px;
      border-radius: 5px;
      margin-right: 5px;
      display: inline-block;
      border: 1px solid lightgray;
    }
  `]
})
export class GridColorCellComponent implements OnInit {

  @Input()
  width: number;

  @Input()
  data: Model;

  constructor() { }

  ngOnInit(): void {
  }

  getColor(): string {
    return this.data.color;
  }

}
