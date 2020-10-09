import { Component } from '@angular/core';
import {Model} from '../data/model';
import {MOCK_DATA} from '../data/MOCK_DATA';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  data: Array<Model> = [...MOCK_DATA, ...MOCK_DATA, ...MOCK_DATA, ...MOCK_DATA, ...MOCK_DATA];
}
