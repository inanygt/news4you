import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  Validators,
} from '@angular/forms';
import { TopicsComponent } from '../topics/topics.component';
import { NewsApiService } from 'src/app/Services/news-api-service';

@Component({
  selector: 'app-newsfeedpers',
  templateUrl: './newsfeedpers.component.html',
  styleUrls: ['./newsfeedpers.component.css'],
})
export class NewsfeedpersComponent {}

let storedValues = JSON.parse(localStorage.getItem('selectedValues')!);
console.log(storedValues);
console.log(storedValues[2]);
