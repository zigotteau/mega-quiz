import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { Question } from '../../models/question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() question: Question = null;
  @Input() assets_folder: string = null;
  @Input() questionNumber: Number = 0;

  alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  constructor() {

  }

  ngOnInit() {

  }

}
