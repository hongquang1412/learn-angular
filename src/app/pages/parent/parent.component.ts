import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { Parent } from './parent.interface';
@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})


export class ParentComponent {
  public inputValue = 'quang'
  

  handleSubmit(e: HTMLInputElement) {
    this.inputValue = e.value
   }
}
