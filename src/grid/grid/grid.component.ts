import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {HeaderCells} from '../grid-header/grid-header.component';
import {Model} from '../../data/model';
import {fromEvent, Subject, timer} from 'rxjs';
import {debounceTime, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-grid',
  template: `
    <div [style.width.px]="getRowWidth()" [style.height.px]="height">
      <app-grid-header [cells]="cells"></app-grid-header>
      <div style="position: relative;">
        <div *ngFor="let x of filteredData; let index = index">
          <app-grid-row [data]="x" [cells]="cells"
                        style="position: absolute"
                        [style.top.px]="(from + index) * rowHeight"></app-grid-row>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class GridComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  @Input()
  cells: HeaderCells = [];

  @Input()
  data: Array<Model> = [];

  filteredData: Array<Model> = [];

  height: number = 0;

  from: number = 0;
  to: number = 0;

  rowHeight: number = 40;

  private numberOfRows: number;
  private readonly extraNodes: number = 10;
  private readonly onDestroy$: Subject<void> = new Subject<void>();

  constructor(private readonly elementRef: ElementRef) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data && changes.data.currentValue) {
      this.height = this.data.length * this.rowHeight;
    }
  }

  ngAfterViewInit(): void {
    const nativeElement = this.elementRef.nativeElement as HTMLElement;
    const {height} = nativeElement.getBoundingClientRect();
    this.numberOfRows = Math.ceil(height / this.rowHeight);

    this.from = 0;
    this.to = this.numberOfRows;

    this.setInitialState();
    this.onScroll(nativeElement);
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  getRowWidth(): number {
    return this.cells.reduce((previousValue, currentValue) => previousValue + currentValue.width, 0);
  }

  private setInitialState(): void {
    timer()
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(() => {
        this.filteredData = this.data.slice(this.from, this.to + this.extraNodes);
      });
  }

  private onScroll(nativeElement: HTMLElement): void {
    fromEvent(this.elementRef.nativeElement, 'scroll')
      .pipe(
        debounceTime(10),
        takeUntil(this.onDestroy$)
      )
      .subscribe(() => {
        const fromWithoutExtraNodes = Math.floor(nativeElement.scrollTop / this.rowHeight);
        const calculatedFrom = fromWithoutExtraNodes - this.extraNodes;
        const calculatedTo = fromWithoutExtraNodes + this.numberOfRows + this.extraNodes;

        this.from = Math.max(calculatedFrom, 0);
        this.to = Math.min(calculatedTo, this.data.length);

        this.filteredData = this.data.slice(this.from, this.to);
      });
  }

}
