import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {NgForm} from '@angular/forms';
  import { from } from 'rxjs';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {

  }
}
