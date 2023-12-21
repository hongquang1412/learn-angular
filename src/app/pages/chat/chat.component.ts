import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent {
  public chatData = 'Parent -> child';
}
