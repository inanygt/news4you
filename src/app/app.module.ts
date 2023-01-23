import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { LoginComponent } from './login/login.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { NewsfeedGlobalComponent } from './newsfeed-global/newsfeed-global.component';
import { NewsfeedpersComponent } from './newsfeedpers/newsfeedpers.component';
import { NewsfeedtopicComponent } from './newsfeedtopic/newsfeedtopic.component';
import { FormsModule } from '@angular/forms';
import { TopicsComponent } from './topics/topics.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';

const appRoutes: Routes = [
  // { path: '', component: NewsfeedComponent },
  { path: '', component: WelcomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
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
    TopicsComponent,
    HomeComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
