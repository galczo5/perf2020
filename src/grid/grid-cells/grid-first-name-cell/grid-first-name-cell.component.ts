import {Component, HostBinding, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Model} from '../../../data/model';

@Component({
  selector: 'app-grid-first-name-cell',
  template: `{{ firstName }}`,
  styles: [`
    :host {
      display: block;
      padding: 0 10px;
    }
  `]
})
export class GridFirstNameCellComponent implements OnInit, OnChanges {

  @HostBinding('style.width.px')
  @Input()
  width: number;

  @Input()
  data: Model;

  firstName: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes.data && changes.data.currentValue) {
      this.firstName = this.getFirstName();
    }

  }

  getFirstName(): string {
    return this.data.first_name;
  }

}
