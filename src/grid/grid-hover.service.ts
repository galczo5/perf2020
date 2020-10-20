import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GridHoverService {

  private readonly hover$: Subject<number> = new Subject<number>();

  hover(id: number): void {
    this.hover$.next(id);
  }

  onHover(): Observable<number> {
    return this.hover$.asObservable();
  }
}
