import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarLeftComponent } from '../sidebar-left/sidebar-left.component';
import { SidebarRightComponent } from '../sidebar-right/sidebar-right.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, SidebarLeftComponent, SidebarRightComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {}
