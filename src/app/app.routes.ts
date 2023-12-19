import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { TestComponent } from './pages/test/test.component';
import { ChatComponent } from './pages/chat/chat.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

// config url
export const routes: Routes = [
  { path: '', component: TestComponent },
  { path: 'test', title: 'text', component: TestComponent },
  { path: 'chat', title: 'chat', component: ChatComponent },
  { path: '**', component: PageNotFoundComponent },
];
