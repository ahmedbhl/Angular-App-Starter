import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./modules/home/lazy.module').then(m => m.LazyModule) },
  {
    path: 'blank-page',
    loadChildren: () => import('./modules/blank-page/blank-page.module').then((m) => m.BlankPageModule)
  }
];


