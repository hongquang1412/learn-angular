import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { Author } from '../../interface/author.interface';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent implements OnInit, OnChanges {
  @Input() input?: string;
  @Input() author?: Author;
  @Output() deleteAuthor = new EventEmitter<Author>();

  public mes?: string;

  // ngOnChanges chỉ chạy khi có input
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges nè');
    console.log(changes['input'].currentValue);
  }

  // chỉ chạy 1 lần khi khởi tạo component
  ngOnInit(): void {
    console.log('ngOnInit nè');
  }

  handleDelete() {
    this.deleteAuthor.emit(this.author);
  }
}
