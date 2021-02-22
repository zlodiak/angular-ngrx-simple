import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectQuestion } from 'src/app/store/selectors';
@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {

  question$ = this.store.pipe(select(selectQuestion));

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store
      .pipe(select(selectQuestion))
      .subscribe((question: string) => {
        console.log(question);
      })
  }

}
