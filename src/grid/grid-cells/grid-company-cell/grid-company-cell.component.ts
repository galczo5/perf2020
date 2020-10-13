import {Component, HostBinding, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Model} from '../../../data/model';

@Component({
  selector: 'app-grid-company-cell',
  template: `{{ company }}`,
  styles: [`
    :host {
      display: block;
      padding: 0 10px;
      font-weight: bold;
    }
  `]
})
export class GridCompanyCellComponent implements OnInit, OnChanges {

  @HostBinding('style.width.px')
  @Input()
  width: number;

  @Input()
  data: Model;

  company: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes.data && changes.data.currentValue) {
      this.company = this.getCompany();
    }

  }

  getCompany(): string {
    return this.data.company;
  }

}
