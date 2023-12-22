import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent implements OnInit, OnChanges {
  @Input() input?: string;
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
}
