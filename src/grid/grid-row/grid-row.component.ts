import {Component, ElementRef, HostBinding, Input, OnDestroy, OnInit} from '@angular/core';
import {Model} from '../../data/model';
import {HeaderCells} from '../grid-header/grid-header.component';
import {fromEvent, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-grid-row',
  template: `
    <ng-container *ngFor="let cell of cells">

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

    </ng-container>
  `,
  styles: [`
    :host {
      display: flex;
      align-items: center;
      height: 40px;
      border-width: 0 1px 1px 1px;
      border-color: gray;
      border-style: solid;
      font-family: monospace;
    }
  `]
})
export class GridRowComponent implements OnInit, OnDestroy {

  @Input()
  data: Model;

  @Input()
  cells: HeaderCells = [];

  @HostBinding('style.background')
  hover: string;

  @HostBinding('style.background')
  selected: string;

  private readonly onDestroy$: Subject<void> = new Subject<void>();

  constructor(private readonly elementRef: ElementRef) {
  }

  ngOnInit(): void {

    fromEvent(this.elementRef.nativeElement, 'mouseenter')
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(() => {
        this.hover = 'beige';
      });

    fromEvent(this.elementRef.nativeElement, 'mouseleave')
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(() => {
        this.hover = undefined;
      });

    fromEvent(this.elementRef.nativeElement, 'click')
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(() => {
        this.selected = !!this.selected ? undefined : 'lightcoral';
      });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

}
