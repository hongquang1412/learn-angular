import { Routes } from '@angular/router';
import { TestComponent } from './pages/test/test.component';
import { ParentComponent } from './pages/parent/parent.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

// config url
export const routes: Routes = [
  { path: '', component: TestComponent },
  { path: 'test', title: 'text', component: TestComponent },
  { path: 'ng', title: 'component-lifecycle', component: ParentComponent },
  { path: '**', component: PageNotFoundComponent },
];
