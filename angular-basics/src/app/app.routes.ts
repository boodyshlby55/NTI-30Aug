import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', title: 'Home', component: HomeComponent },
  {
    path: 'about',
    children: [
      { path: '', title: 'About', loadComponent: () => import('./about/about.component').then(m => m.AboutComponent) },
      { path: 'company', title: 'Our Company', loadComponent: () => import('./company/company.component').then(m => m.CompanyComponent) },
      { path: 'team', title: 'Our Team', loadComponent: () => import('./team/team.component').then(m => m.TeamComponent) },
    ]
  },
  { path: '**', title: '404 Not Found', component: NotFoundComponent },
];
