import { Routes } from '@angular/router';
import { TestComponent } from './pages/test/test.component';

// config url
export const routes: Routes = [
  { path: '**', component: TestComponent },
  { path: 'test', component: TestComponent },
];
