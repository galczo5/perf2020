import {Component, Input, OnInit} from '@angular/core';
import {Model} from '../../../data/model';

@Component({
  selector: 'app-grid-ip-address-cell',
  template: `
    <div class="grid-ip" [style.width.px]="width">
      <code>
        {{ getIp() }}
      </code>
    </div>
  `,
  styles: [`
    .grid-ip {
      padding: 0 10px;
    }
  `]
})
export class GridIpAddressCellComponent implements OnInit {

  @Input()
  width: number;

  @Input()
  data: Model;

  constructor() { }

  ngOnInit(): void {
  }

  getIp(): string {
    return this.data.ip_address;
  }

}
