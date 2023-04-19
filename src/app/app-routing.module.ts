import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'destination',
    loadChildren: () => import('./pages/destination/destination.module').then(m => m.DestinationModule)
  },
  {
    path: 'crew',
    loadChildren: () => import('./pages/crew/crew.module').then(m => m.CrewModule)
  },
  {
    path: 'technology',
    loadChildren: () => import('./pages/technology/technology.module').then(m => m.TechnologyModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
