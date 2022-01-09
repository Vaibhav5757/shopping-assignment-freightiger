import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonAPIObject } from 'src/app/models/person';
import { Persons } from 'src/app/models/persons';

@Injectable({
  providedIn: 'root',
})
export class RandomPersonService {
  readonly baseUrl = 'https://randomuser.me/api/';

  constructor(private http: HttpClient) {}

  getRandomPerson(): Observable<PersonAPIObject> {
    return this.http.get<PersonAPIObject>(this.baseUrl);
  }

  getTenRandomPerson(): Observable<Persons> {
    return this.http.get<Persons>(this.baseUrl + '?results=10');
  }
}
