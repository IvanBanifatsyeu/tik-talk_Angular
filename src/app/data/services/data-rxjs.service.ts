import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataRxjsService {
  constructor() {}

  // Метод для создания Observable
  getData(): Observable<number[]> {
    return of([1, 2, 3, 4, 5,6,7,8,9,4000077]); // Используем `of` для создания Observable из массива
  }
}
