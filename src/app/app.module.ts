import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UpvoteComponent } from './upvote/upvote.component';
import { JokeComponent } from './joke/joke.component';
import { JokeListComponent } from './joke-list/joke-list.component';
import { JokeFilterPipe } from './joke-filter.pipe';
import { RouterModule, Routes } from '@angular/router';
import { Joke } from "./joke";
import { Vote } from "./vote";
import { JokeService } from './joke.service';

const appRoutes: Routes = [
  { path: 'jokes', component: JokeListComponent },
  { path: 'jokes/:jokeid', component: JokeComponent },
  { path: '', redirectTo: '/jokes', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    UpvoteComponent,
    JokeComponent,
    JokeListComponent,
    JokeFilterPipe
  ],
  imports: [
    BrowserModule, FormsModule,
    RouterModule.forRoot(
      appRoutes    
    )
  ],
  providers: [JokeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
