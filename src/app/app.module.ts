import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionComponent } from './quiz/question/question.component';
import { QuizIndexComponent } from './quiz/quiz-index/quiz-index.component';
import { SolutionsComponent } from './quiz/solutions/solutions.component';
import { GameComponent } from './quiz/game/game.component';
import { AnimationComponent } from './animation/animation.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    PageNotFoundComponentComponent,
    QuizComponent,
    QuestionComponent,
    QuizIndexComponent,
    SolutionsComponent,
    GameComponent,
    AnimationComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    CollapseModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
