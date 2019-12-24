import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'src/app/models/question.model';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent implements OnInit {

  @Input() questions: Question[] = null;

  alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  hide = true;

  constructor() { }

  ngOnInit() {
  }

  SwitchHide() {
    this.hide = !this.hide;
  }

  getSolution(index: number) {
    const q = this.questions[index];
    if (typeof q.solution === 'number' && q.propositions && q.propositions.length > 0) {
      return this.alphabet[q.solution] + '. (' + q.propositions[q.solution] + ')';
    } else {
      return q.solution;
    }
  }

}
