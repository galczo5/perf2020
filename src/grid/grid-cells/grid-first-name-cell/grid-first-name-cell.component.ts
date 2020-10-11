import {Component, Input, OnInit} from '@angular/core';
import {Model} from '../../../data/model';

@Component({
  selector: 'app-grid-first-name-cell',
  template: `
    <div class="grid-first-name" [style.width.px]="width">
      <div>
        {{ getFirstName() }}
      </div>
    </div>
  `,
  styles: [`
    .grid-first-name {
      padding: 0 10px;
    }
  `]
})
export class GridFirstNameCellComponent implements OnInit {

  @Input()
  width: number;

  @Input()
  data: Model;

  constructor() { }

  ngOnInit(): void {
  }

  getFirstName(): string {
    return this.data.first_name;
  }

}
