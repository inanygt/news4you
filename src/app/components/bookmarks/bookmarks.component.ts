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
        console.log(this.bookmarks);
      });
  }

  deleteBm(id: number) {
    let userId = localStorage.getItem('userId');
    console.log(userId);
    console.log(id);
    fetch(this.url + 'bookmarks/' + userId + '/' + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      this.ngOnInit();
    });
  }

  ngOnInit(): void {
    this.getBookmarks();
  }
}
