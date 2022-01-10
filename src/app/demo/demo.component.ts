import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Person } from '../models/persons';
import { RandomPersonService } from './services/random-person.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent implements OnDestroy {
  persons: Person[] = [];
  direction = '';
  personAPISubs!: Subscription;

  constructor(private personSvc: RandomPersonService) {
    this.getTenRandomPerson();
  }

  onScrollDown(ev: any) {
    console.log('scrolled down!!', ev);
    this.getTenRandomPerson();
    this.direction = 'scroll down';
  }

  onScrollUp(ev: any) {
    console.log('scrolled up!', ev);
    this.direction = 'scroll up';
  }

  getTenRandomPerson() {
    this.personAPISubs = this.personSvc.getTenRandomPerson().subscribe((el) => {
      this.persons.push(...el.results);
    });
  }

  ngOnDestroy(): void {
    this.personAPISubs.unsubscribe();
  }
}
