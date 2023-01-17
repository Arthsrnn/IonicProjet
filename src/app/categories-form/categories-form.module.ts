import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriesFormPageRoutingModule } from './categories-form-routing.module';

import { CategoriesFormPage } from './categories-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriesFormPageRoutingModule
  ],
  declarations: [CategoriesFormPage]
})
export class CategoriesFormPageModule {}
