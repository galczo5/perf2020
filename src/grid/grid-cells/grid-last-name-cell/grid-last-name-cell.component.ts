import {Component, Input, OnInit} from '@angular/core';
import {Model} from '../../../data/model';

@Component({
  selector: 'app-grid-last-name-cell',
  template: `
    <div class="grid-last-name" [style.width.px]="width">
      <div>
        {{ getLastName() }}
      </div>
    </div>
  `,
  styles: [`
    .grid-last-name {
      padding: 0 10px;
    }
  `]
})
export class GridLastNameCellComponent implements OnInit {

  @Input()
  width: number;

  @Input()
  data: Model;

  constructor() { }

  ngOnInit(): void {
  }

  getLastName(): string {
    return this.data.last_name;
  }

}
