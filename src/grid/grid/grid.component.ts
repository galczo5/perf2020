import {Component, ElementRef, Input, OnDestroy, OnInit} from '@angular/core';
import {HeaderCells} from '../grid-header/grid-header.component';
import {Model} from '../../data/model';
import {fromEvent, Subject} from 'rxjs';
import {GridHoverService} from '../grid-hover.service';
import {GridSelectedService} from '../grid-selected.service';
import {filter, map, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-grid',
  template: `
    <div [style.width.px]="getRowWidth()">
      <app-grid-header [cells]="cells"></app-grid-header>
      <div *ngFor="let x of data">
        <app-grid-row [data]="x" [cells]="cells"></app-grid-row>
      </div>
    </div>
  `,
  styles: []
})
export class GridComponent implements OnInit, OnDestroy {

  @Input()
  cells: HeaderCells = [];

  @Input()
  data: Array<Model> = [];

  private readonly onDestroy$: Subject<void> = new Subject<void>();

  constructor(private readonly elementRef: ElementRef,
              private readonly gridHoverService: GridHoverService,
              private readonly gridSelectedService: GridSelectedService) { }

  ngOnInit(): void {

    fromEvent(this.elementRef.nativeElement, 'mouseover')
      .pipe(
        map((event: MouseEvent) => (event.target as HTMLElement).closest('.grid-row')),
        filter(row => !!row),
        takeUntil(this.onDestroy$)
      )
      .subscribe((row: HTMLElement) => {
        const id = Number(row.getAttribute('data-id'));
        this.gridHoverService.hover(id);
      });

    fromEvent(this.elementRef.nativeElement, 'click')
      .pipe(
        map((event: MouseEvent) => (event.target as HTMLElement).closest('.grid-row')),
        filter(row => !!row),
        takeUntil(this.onDestroy$)
      )
      .subscribe((row: HTMLElement) => {
        const id = Number(row.getAttribute('data-id'));
        this.gridSelectedService.selected(id);
      });

  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  getRowWidth(): number {
    return this.cells.reduce((previousValue, currentValue) => previousValue + currentValue.width, 0);
  }

}
