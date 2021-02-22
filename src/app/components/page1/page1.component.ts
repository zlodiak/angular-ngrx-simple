import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { addText } from 'src/app/store/actions';
import { selectText } from 'src/app/store/selectors';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

  text$ = this.store.pipe(select(selectText));
  text: string;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store
      .pipe(select(selectText))
      .subscribe((text: string) => {
        console.log(text);
      })
  }

  changeText() {
    this.store.dispatch(addText({ text: this.text }));
  }

}
