import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-grid-header-cell',
  template: `
    <div class="grid-header-cell" [style.width.px]="width">
      {{ getName() }}
      <span class="grid-header-cell-sort-arrows">
        ⮝⮟
      </span>
    </div>
  `,
  styles: [`
    .grid-header-cell {
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
export class GridHeaderCellComponent implements OnInit {

  @Input()
  name: string;

  @Input()
  width: number;

  constructor() { }

  ngOnInit(): void {
  }

  getName(): string {
    return this.name.replace('_', ' ');
  }

}
