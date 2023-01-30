import { Component, createPlatform, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css'],
})
export class BookmarksComponent implements OnInit {
  bookmarks!: any;
  url: string = 'http://localhost:8000/api/';

  constructor() {}

  getBookmarks() {
    let userId = localStorage.getItem('userId');
    fetch(this.url + 'bookmarks/' + userId)
      .then((res) => res.json())
      .then((data) => {
        this.bookmarks = data;
      });
  }

  ngOnInit(): void {
    this.getBookmarks();
  }
}
