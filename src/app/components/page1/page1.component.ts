import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { addQuestion, addText, deleteQuestion } from 'src/app/store/actions';
import { selectQuestion, selectText } from 'src/app/store/selectors';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

  text$ = this.store.pipe(select(selectText));
  text: string;
  question: string;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store
      .pipe(select(selectText))
      .subscribe((text: string) => {
        console.log(text);
        this.text = text;
      })
  }

  changeText() {
    this.store.dispatch(addText({ text: this.text }));
  }

  sendQuestion() {
    this.store.dispatch(addQuestion({ question: this.question }));
    this.question = '';
  }

  deleteQuestion() {
    this.store.dispatch(deleteQuestion());
  }

}
