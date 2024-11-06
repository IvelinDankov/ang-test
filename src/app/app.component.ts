import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { SimpleUser } from './types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Demo-App';

  changeTitle() {
    this.title === 'Здравей! Демо Ап'
      ? (this.title = 'Demo-App')
      : (this.title = 'Здравей! Демо Ап');
  }

  userList: SimpleUser[] = [
    { name: 'Ivan', age: 23 },
    { name: 'Pesscho', age: 53 },
    { name: 'Stilian', age: 43 },
    { name: 'Bamba', age: 33 },
    { name: 'Sam', age: 53 },
  ];

  addUser(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    this.userList.push({ name: inputName.value, age: Number(inputAge.value) });
    inputName.value = '';
    inputAge.value = '';
  }
}
