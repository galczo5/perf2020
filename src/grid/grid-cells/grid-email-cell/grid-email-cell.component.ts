import {Component, Input, OnInit} from '@angular/core';
import {Model} from '../../../data/model';

@Component({
  selector: 'app-grid-email-cell',
  template: `
    <div class="grid-email" [style.width.px]="width">
      <img class="grid-email-img" src="assets/envelope-solid.png" alt="envelope">
      <a href="mailto:{{ getEmail() }}">{{ getEmail() }}</a>
    </div>
  `,
  styles: [`
    .grid-email {
      padding: 0 10px;
      display: flex;
      align-items: center;
    }

    .grid-email-img {
      margin-right: 5px;
    }
  `]
})
export class GridEmailCellComponent implements OnInit {

  @Input()
  width: number;

  @Input()
  data: Model;

  constructor() { }

  ngOnInit(): void {
  }

  getEmail(): string {
    return this.data.email;
  }

}
