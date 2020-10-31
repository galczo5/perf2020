import {ChangeDetectorRef, Component, ElementRef, Input, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Model} from '../../data/model';
import {HeaderCells} from '../grid-header/grid-header.component';
import {fromEvent, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-grid-row',
  template: `
    <div #element class="grid-row">
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

  @ViewChild('element', { read: ElementRef })
  element: ElementRef;

  @Input()
  data: Model;

  @Input()
  cells: HeaderCells = [];

  private selected: boolean = false;
  private readonly onDestroy$: Subject<void> = new Subject<void>();

  constructor(private readonly elementRef: ElementRef,
              private readonly renderer: Renderer2) { }

  ngOnInit(): void {

    fromEvent(this.elementRef.nativeElement, 'mouseenter')
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(() => {
        this.renderer.addClass(this.element.nativeElement, 'hover');

        const mouseLeave$: Subject<void> = new Subject<void>();
        fromEvent(this.elementRef.nativeElement, 'mouseleave')
          .pipe(
            takeUntil(mouseLeave$),
            takeUntil(this.onDestroy$)
          )
          .subscribe(() => {
            this.renderer.removeClass(this.element.nativeElement, 'hover');
            mouseLeave$.next();
            mouseLeave$.complete();
          });
      });

    fromEvent(this.elementRef.nativeElement, 'click')
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(() => {
        this.selected = !this.selected;
        if (this.selected) {
          this.renderer.addClass(this.element.nativeElement, 'selected');
        } else {
          this.renderer.removeClass(this.element.nativeElement, 'selected');
        }
      });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

}
