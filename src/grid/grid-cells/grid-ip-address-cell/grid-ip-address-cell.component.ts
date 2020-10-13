import {Component, HostBinding, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Model} from '../../../data/model';

@Component({
  selector: 'app-grid-ip-address-cell',
  template: `
    <code>
      {{ ip }}
    </code>
  `,
  styles: [`
    :host {
      display: block;
      padding: 0 10px;
    }
  `]
})
export class GridIpAddressCellComponent implements OnInit, OnChanges {

  @HostBinding('style.width.px')
  @Input()
  width: number;

  @Input()
  data: Model;

  ip: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes.data && changes.data.currentValue) {
      this.ip = this.getIp();
    }
  }

  getIp(): string {
    return this.data.ip_address;
  }

}
