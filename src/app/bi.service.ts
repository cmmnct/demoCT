import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BiService {

  constructor(private http: HttpClient) { }

  public name = 'Mark';

  setName(name: string) {
    this.name = name;
  }

  public name$: Observable<string> = new Observable(subscriber => {
    subscriber.next(this.name);
  });

  getName(): Observable<string> {
    return this.name$
  }

  getCards(): Observable<[any]> {
    return this.http.get<[any]>('../assets/cards.json')

  }
}


