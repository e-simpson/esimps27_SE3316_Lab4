import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthorsService } from './authors.service'

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
  encapsulation: ViewEncapsulation.None
  providers: [AuthorsService]
})
export class AuthorsComponent implements OnInit {
  
  title = "Title for authors page";
  authors;
  
  constructor(authorsService : AuthorsService) {
    this.authors = authorsService.getAuthors();
  }

  ngOnInit() { }

}
