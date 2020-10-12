import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GridSelectedService {

  private readonly selected$: Subject<number> = new Subject<number>();

  selected(id: number): void {
    this.selected$.next(id);
  }

  onSelected(): Observable<number> {
    return this.selected$.asObservable();
  }
}
