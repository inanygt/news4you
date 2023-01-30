import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})


export class TopicsComponent{
  form = new FormGroup({
    Sports: new FormControl(false),
    Politics: new FormControl(false),
    War: new FormControl(false),
    Financial: new FormControl(false),
    Crypto: new FormControl(false),
    Tech: new FormControl(false),
    Science: new FormControl(false),
    Health: new FormControl(false),
    // other formControls here
  });


  submitForm() {
    let selectedValues = Object.entries(this.form.value)
      .filter(([key, value]) => value)
      .map(([key, value]) => key);
    console.log(selectedValues);
  }



}

