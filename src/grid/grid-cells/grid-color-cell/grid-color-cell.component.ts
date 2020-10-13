import {Component, HostBinding, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Model} from '../../../data/model';

@Component({
  selector: 'app-grid-color-cell',
  template: `
    <span [style.background]="colorClass" class="grid-color-circle"></span>
    {{ color }}
  `,
  styles: [`
    :host {
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
export class GridColorCellComponent implements OnInit, OnChanges {

  @HostBinding('style.width.px')
  @Input()
  width: number;

  @Input()
  data: Model;

  color: string;
  colorClass: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes.data && changes.data.currentValue) {
      this.color = this.getColor();
      this.colorClass = this.getColor().toLocaleLowerCase();
    }

  }

  getColor(): string {
    return this.data.color;
  }

}
