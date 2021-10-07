import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './angular/angular.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { NodejsComponent } from './nodejs/nodejs.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'angular',
    pathMatch: 'full',
  },
  {
    path: 'angular',
    component: AngularComponent,
  },
  {
    path: 'javascript',
    component: JavascriptComponent,
  },
  {
    path: 'nodejs',
    component: NodejsComponent,
  },
  // wildcard routes
  {
    path: '**',
    redirectTo: 'angular',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
