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
export class NewsfeedpersComponent {

  topicNews : any = []

  storedValues = JSON.parse(localStorage.getItem('selectedValues')!);

  topicApiLink: string = this.NewsApiService.urlLink + this.storedValues.join(" OR ") + this.NewsApiService.urlKey


  constructor(
    private NewsApiService: NewsApiService,) {
console.log(this.topicApiLink)
    }



  ngOnInit() {

    fetch(this.topicApiLink)
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(data => {
    console.log(data);

    this.topicNews = data.articles
    console.log(this.topicNews)
  })
  .catch(error => {
    console.error("There was a problem with the fetch operation:", error);
  });


        let storedValues = JSON.parse(localStorage.getItem('selectedValues')!);
        console.log(storedValues);
        // console.log(storedValues[0]);
        // console.log(storedValues[1]);
        // console.log(storedValues[2]);


      };


}





