import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  users = [
    { name: 'Ivan', age: 45 },
    { name: 'Maria', age: 28 },
    { name: 'Pescho', age: 48 },
  ];
}
