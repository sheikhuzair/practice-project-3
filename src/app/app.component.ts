import { Component} from '@angular/core';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'New Project';
  FirstName = 'Uzair';
  LastName = 'Altaf';
user = {
username: '',
password: ''
};
displayFirstName() {
  return this.FirstName;
 }
 greatperson() {
   alert('hello Uzair');
 }

 mousingOver() {
console.log('Uzair here ');
}
KeyDown() {
 console.log('Name Is Uzair');
 }
onSubmit(theForm: NgForm) {
this.user.username = theForm.value.username;
this.user.password = theForm.value.password;
  console.log(this.user);
}

}
