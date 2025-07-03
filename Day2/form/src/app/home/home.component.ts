import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../componants/greeting/greeting.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GreetingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  homeMessage = signal('Hello User!!');

  keyUpHandler(event : KeyboardEvent) {
    console.log(`user presswd the ${event.key} key`);
  }
}
