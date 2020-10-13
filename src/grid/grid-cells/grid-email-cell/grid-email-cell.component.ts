import {Component, HostBinding, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Model} from '../../../data/model';

@Component({
  selector: 'app-grid-email-cell',
  template: `
    <img class="grid-email-img" src="assets/envelope-solid.png" alt="envelope">
    <a href="mailto:{{ email }}">{{ email }}</a>
  `,
  styles: [`
    :host {
      padding: 0 10px;
      display: flex;
      align-items: center;
    }

    .grid-email-img {
      margin-right: 5px;
    }
  `]
})
export class GridEmailCellComponent implements OnInit, OnChanges {

  @HostBinding('style.width.px')
  @Input()
  width: number;

  @Input()
  data: Model;

  email: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes.data && changes.data.currentValue) {
      this.email = this.getEmail();
    }

  }

  getEmail(): string {
    return this.data.email;
  }

}
