import {Component, HostBinding, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-grid-header-cell',
  template: `
    {{ nameParsed }}
    <span class="grid-header-cell-sort-arrows">
      ⮝⮟
    </span>
  `,
  styles: [`
    :host {
      padding: 0 10px;
      text-transform: uppercase;
      font-weight: bold;
      color: gray;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.8em;
      border-left: 1px solid gray;
    }

    .grid-header-cell-sort-arrows {
      padding-top: 3px;
    }
  `]
})
export class GridHeaderCellComponent implements OnInit, OnChanges {

  @Input()
  name: string;

  nameParsed: string;

  @HostBinding('style.width.px')
  @Input()
  width: number;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes.name && changes.name.currentValue) {
      this.nameParsed = this.getName();
    }

  }

  getName(): string {
    return this.name.replace('_', ' ');
  }

}
