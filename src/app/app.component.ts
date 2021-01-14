import { Component } from '@angular/core';
import { PaginationService } from './pagination.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PaginationService]
})
export class AppComponent {
  title = 'BacuganArena';
}
