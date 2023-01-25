// DEPENDENCIES
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

// COMPONENTS
import { AppComponent } from './app.component';
import { WelcomePageComponent } from '././components/welcome-page/welcome-page.component';
import { LoginComponent } from '././components/login/login.component';
import { NewsfeedComponent } from '././components/newsfeed/newsfeed.component';
import { NewsfeedGlobalComponent } from '././components/newsfeed-global/newsfeed-global.component';
import { NewsfeedpersComponent } from '././components/newsfeedpers/newsfeedpers.component';
import { NewsfeedtopicComponent } from '././components/newsfeedtopic/newsfeedtopic.component';
import { TopicsComponent } from '././components/topics/topics.component';
import { HomeComponent } from '././components/home/home.component';
import { SignupComponent } from '././components/signup/signup.component';

import { HttpClientModule } from '@angular/common/http';


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
