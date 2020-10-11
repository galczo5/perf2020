import {Component, OnInit} from '@angular/core';
import {Model} from '../data/model';
import {MOCK_DATA} from '../data/MOCK_DATA';
import {HeaderCells} from '../grid/grid-header/grid-header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  data: Array<Model> = [...MOCK_DATA, ...MOCK_DATA, ...MOCK_DATA, ...MOCK_DATA, ...MOCK_DATA];
  columns: Array<[keyof Model, number]> = [
    ['city', 300],
    ['color', 200],
    ['company', 200],
    ['first_name', 150],
    ['last_name', 150],
    ['email', 400],
    ['ip_address', 200]
  ];

  cells: HeaderCells = [];

  ngOnInit(): void {
    this.cells = this.columns.map(x => ({
      name: x[0],
      width: x[1]
    }));
  }
}
