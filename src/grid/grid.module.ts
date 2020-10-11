import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';
import { GridHeaderComponent } from './grid-header/grid-header.component';
import { GridRowComponent } from './grid-row/grid-row.component';
import { GridHeaderCellComponent } from './grid-header-cell/grid-header-cell.component';
import {GridCellsModule} from './grid-cells/grid-cells.module';

@NgModule({
  declarations: [GridComponent, GridHeaderComponent, GridRowComponent, GridHeaderCellComponent],
  exports: [
    GridHeaderComponent,
    GridComponent
  ],
  imports: [CommonModule, GridCellsModule]
})
export class GridModule { }
