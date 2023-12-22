import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { CommonModule } from '@angular/common';
import { Author } from '../../interface/author.interface';
@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, CommonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
  public inputValue = 'quang';

  public authors = [
    {
      id: 1,
      name: 'Quang1',
      gender: 'Nam',
    },
    {
      id: 2,
      name: 'Quang2',
      gender: 'Nam',
    },
    {
      id: 3,
      name: 'Quang3',
      gender: 'Nam',
    },
  ];

  handleSubmit(e: HTMLInputElement) {
    this.inputValue = e.value;
  }

  handleDelete(author: Author) {
    this.authors = this.authors.filter(
      (item) => item.id !== author.id );
  }
}
