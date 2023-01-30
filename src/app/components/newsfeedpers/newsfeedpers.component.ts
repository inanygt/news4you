import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsfeedpers',
  templateUrl: './newsfeedpers.component.html',
  styleUrls: ['./newsfeedpers.component.css'],
})
export class NewsfeedpersComponent implements OnInit {
  bookmarks!: any;
  url: string = 'http://localhost:8000/api/';

  constructor() {}

  getBookmarks() {
    fetch(this.url + 'bookmarks')
      .then((res) => res.json())
      .then((data) => console.log((this.bookmarks = data)));
  }

  ngOnInit(): void {
    this.getBookmarks();
  }
}
