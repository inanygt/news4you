import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css'],
})
export class TopicsComponent implements OnInit {
  constructor() {}

  // Testing //

  checkedTopics: number[] = [];

  getTopicId(event: any) {
    if (event.target.checked) {
      this.checkedTopics.push(event.target.value);
    } else {
      // remove again if unchecked
      this.checkedTopics.filter(
        (number: number) => number != event.target.value
      );
    }
  }

  onSubmit() {
    let userId = localStorage.getItem('userId');
    console.log(userId);
    console.log(this.checkedTopics);
  }

  // Testing //

  url = 'http://localhost:8000/api/';
  topics!: any;

  fetchtopics() {
    fetch(this.url + 'topics')
      .then((res) => res.json())
      .then((data) => {
        this.topics = data;
      });
  }

  // FormGroup

  form = new FormGroup({
    Sports: new FormControl(false),
    // Sports: new FormControl(false),
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

    // console.log(selectedValues[0])
    // console.log(selectedValues[1])
    // if (selectedValues !== null) {
    //   localStorage.setItem("selectedValues", JSON.stringify(selectedValues));
    // }
    // let storedValues = JSON.parse(localStorage.getItem('selectedValues')!);
    // localStorage.setItem("selectedValues", JSON.stringify(selectedValues));
  }

  ngOnInit(): void {
    this.fetchtopics();
  }
}
