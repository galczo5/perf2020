import {Component, Input, OnInit} from '@angular/core';
import {Model} from '../../../data/model';

@Component({
  selector: 'app-grid-company-cell',
  template: `
    <div class="grid-company" [style.width.px]="width">
      <b>
        {{ getCompany() }}
      </b>
    </div>
  `,
  styles: [`
    .grid-company {
      padding: 0 10px;
    }
  `]
})
export class GridCompanyCellComponent implements OnInit {

  @Input()
  width: number;

  @Input()
  data: Model;

  constructor() { }

  ngOnInit(): void {
  }

  getCompany(): string {
    return this.data.company;
  }

}
