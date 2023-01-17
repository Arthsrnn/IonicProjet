import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriesFormPage } from './categories-form.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriesFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesFormPageRoutingModule {}
