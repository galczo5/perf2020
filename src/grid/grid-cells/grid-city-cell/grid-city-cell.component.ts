import {Component, HostBinding, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Model} from '../../../data/model';

@Component({
  selector: 'app-grid-city-cell',
  template: '{{ city }}',
  styles: [`
    :host {
      display: block;
      padding: 0 10px;
      font-style: italic;
    }
  `]
})
export class GridCityCellComponent implements OnInit, OnChanges {

  @Input()
  @HostBinding('style.width.px')
  width: number;

  @Input()
  data: Model;

  city: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes.data && changes.data.currentValue) {
      this.city = this.getCity();
    }

  }

  getCity(): string {
    return this.data.city;
  }

}
