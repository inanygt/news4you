import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { LoginComponent } from './login/login.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { NewsfeedGlobalComponent } from './newsfeed-global/newsfeed-global.component';
import { NewsfeedpersComponent } from './newsfeedpers/newsfeedpers.component';
import { NewsfeedtopicComponent } from './newsfeedtopic/newsfeedtopic.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: '', component: NewsfeedComponent },
  { path: 'newsFeed', component: NewsfeedComponent },
  { path: 'global', component: NewsfeedGlobalComponent },
  { path: 'personal', component: NewsfeedpersComponent },
  { path: 'topic', component: NewsfeedtopicComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    LoginComponent,
    NewsfeedComponent,
    NewsfeedGlobalComponent,
    NewsfeedpersComponent,
    NewsfeedtopicComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
