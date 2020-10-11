import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GridCityCellComponent} from './grid-city-cell/grid-city-cell.component';
import {GridColorCellComponent} from './grid-color-cell/grid-color-cell.component';
import {GridCompanyCellComponent} from './grid-company-cell/grid-company-cell.component';
import {GridFirstNameCellComponent} from './grid-first-name-cell/grid-first-name-cell.component';
import {GridLastNameCellComponent} from './grid-last-name-cell/grid-last-name-cell.component';
import {GridEmailCellComponent} from './grid-email-cell/grid-email-cell.component';
import {GridIpAddressCellComponent} from './grid-ip-address-cell/grid-ip-address-cell.component';

@NgModule({
  declarations: [
    GridCityCellComponent,
    GridColorCellComponent,
    GridCompanyCellComponent,
    GridFirstNameCellComponent,
    GridLastNameCellComponent,
    GridEmailCellComponent,
    GridIpAddressCellComponent
  ],
  exports: [
    GridFirstNameCellComponent,
    GridLastNameCellComponent,
    GridEmailCellComponent,
    GridIpAddressCellComponent,
    GridCityCellComponent,
    GridCompanyCellComponent,
    GridColorCellComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GridCellsModule {
}
