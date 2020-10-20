import {ChangeDetectorRef, Component, ElementRef, Input, OnDestroy, OnInit} from '@angular/core';
import {Model} from '../../data/model';
import {HeaderCells} from '../grid-header/grid-header.component';
import {fromEvent, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-grid-row',
  template: `
    <div class="grid-row" [class.hover]="hover" [class.selected]="selected">
      <div *ngFor="let cell of cells" class="grid-cell">
        <ng-container [ngSwitch]="cell.name">

          <app-grid-id-cell *ngSwitchCase="'id'"
                            [data]="data"
                            [width]="cell.width"></app-grid-id-cell>

          <app-grid-city-cell *ngSwitchCase="'city'"
                              [data]="data"
                              [width]="cell.width"></app-grid-city-cell>

          <app-grid-color-cell *ngSwitchCase="'color'"
                               [data]="data"
                               [width]="cell.width"></app-grid-color-cell>

          <app-grid-company-cell *ngSwitchCase="'company'"
                                 [data]="data"
                                 [width]="cell.width"></app-grid-company-cell>

          <app-grid-first-name-cell *ngSwitchCase="'first_name'"
                                    [data]="data"
                                    [width]="cell.width"></app-grid-first-name-cell>

          <app-grid-last-name-cell *ngSwitchCase="'last_name'"
                                   [data]="data"
                                   [width]="cell.width"></app-grid-last-name-cell>

          <app-grid-email-cell *ngSwitchCase="'email'"
                               [data]="data"
                               [width]="cell.width"></app-grid-email-cell>

          <app-grid-ip-address-cell *ngSwitchCase="'ip_address'"
                                    [data]="data"
                                    [width]="cell.width"></app-grid-ip-address-cell>

          <app-grid-gender-cell *ngSwitchCase="'gender'"
                                [data]="data"
                                [width]="cell.width"></app-grid-gender-cell>
        </ng-container>

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
              private readonly changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {

    fromEvent(this.elementRef.nativeElement, 'mouseenter')
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(() => {
        this.hover = true;
        this.changeDetectorRef.detectChanges();
      });

    fromEvent(this.elementRef.nativeElement, 'mouseleave')
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(() => {
        this.hover = false;
        this.changeDetectorRef.detectChanges();
      });

    fromEvent(this.elementRef.nativeElement, 'click')
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(() => {
        this.selected = !this.selected;
        this.changeDetectorRef.detectChanges();
      });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

}
