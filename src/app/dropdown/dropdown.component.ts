import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  posts: object;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://dummy.restapiexample.com/api/v1/employees').subscribe(posts => {
   this.posts = posts;
   console.log(this.posts);
     });
  }

}
