import {Component, ElementRef, Input, OnDestroy, OnInit} from '@angular/core';
import {Model} from '../../data/model';
import {HeaderCells} from '../grid-header/grid-header.component';
import {fromEvent, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {GridHoverService} from '../grid-hover.service';
import {GridSelectedService} from '../grid-selected.service';

@Component({
  selector: 'app-grid-row',
  template: `
    <div class="grid-row" [class.hover]="hover" [class.selected]="selected" [attr.data-id]="data.id">
      <div *ngFor="let cell of cells" class="grid-cell">

        <app-grid-id-cell *ngIf="cell.name === 'id'"
                          [data]="data"
                          [width]="cell.width"></app-grid-id-cell>

        <app-grid-city-cell *ngIf="cell.name === 'city'"
                            [data]="data"
                            [width]="cell.width"></app-grid-city-cell>

        <app-grid-color-cell *ngIf="cell.name === 'color'"
                             [data]="data"
                             [width]="cell.width"></app-grid-color-cell>

        <app-grid-company-cell *ngIf="cell.name === 'company'"
                               [data]="data"
                               [width]="cell.width"></app-grid-company-cell>

        <app-grid-first-name-cell *ngIf="cell.name === 'first_name'"
                                  [data]="data"
                                  [width]="cell.width"></app-grid-first-name-cell>

        <app-grid-last-name-cell *ngIf="cell.name === 'last_name'"
                                 [data]="data"
                                 [width]="cell.width"></app-grid-last-name-cell>

        <app-grid-email-cell *ngIf="cell.name === 'email'"
                             [data]="data"
                             [width]="cell.width"></app-grid-email-cell>

        <app-grid-ip-address-cell *ngIf="cell.name === 'ip_address'"
                                  [data]="data"
                                  [width]="cell.width"></app-grid-ip-address-cell>

        <app-grid-gender-cell *ngIf="cell.name === 'gender'"
                              [data]="data"
                              [width]="cell.width"></app-grid-gender-cell>

      </div>
    </div>
  `,
  styles: [`
    .grid-row {
      display: flex;
      align-items: center;
      height: 40px;
      border-width: 0 1px 1px 1px;
      border-color: gray;
      border-style: solid;
      font-family: monospace;
    }

    .hover {
      background: beige;
    }

    .selected {
      background: lightcoral;
    }
  `]
})
export class GridRowComponent implements OnInit, OnDestroy {

  @Input()
  data: Model;

  @Input()
  cells: HeaderCells = [];

  @Input()
  hover: boolean = false;

  @Input()
  selected: boolean = false;

  private readonly onDestroy$: Subject<void> = new Subject<void>();

  constructor(private readonly elementRef: ElementRef,
              private readonly gridHoverService: GridHoverService,
              private readonly gridSelectedService: GridSelectedService) { }

  ngOnInit(): void {

    this.gridHoverService.onHover()
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(id => {
        if (id === this.data.id && !this.hover) {
          this.hover = true;
        } else if (id !== this.data.id && !!this.hover) {
          this.hover = false;
        }
      });

    this.gridSelectedService.onSelected()
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(id => {
        if (id === this.data.id && !this.selected) {
          this.selected = true;
        } else if (id !== this.data.id && !!this.selected) {
          this.selected = false;
        }
      });

  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

}
