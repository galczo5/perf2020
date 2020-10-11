import {Component, HostBinding, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Model} from '../../../data/model';

@Component({
  selector: 'app-grid-last-name-cell',
  template: `{{ lastName }}`,
  styles: [`
    :host {
      display: block;
      padding: 0 10px;
    }
  `]
})
export class GridLastNameCellComponent implements OnInit, OnChanges {

  @HostBinding('style.width.px')
  @Input()
  width: number;

  @Input()
  data: Model;

  lastName: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes.data && changes.data.currentValue) {
      this.lastName = this.getLastName();
    }

  }

  getLastName(): string {
    return this.data.last_name;
  }

}
