import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './content/homepage/homepage.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    loadChildren: () =>
      import('./content/content.module').then((module) => module.ContentModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
