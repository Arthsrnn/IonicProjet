import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'product-form',
    loadChildren: () => import('./product-form/product-form.module').then( m => m.ProductFormPageModule)
  },
  {
    path: 'product-list',
    loadChildren: () => import('./product-list/product-list.module').then( m => m.ProductListPageModule)
  },
  {
    path: 'one-product/:id',
    loadChildren: () => import('./one-product/one-product.module').then( m => m.OneProductPageModule)
  },
  {
    path: 'edit-product/:id',
    loadChildren: () => import('./edit-product/edit-product.module').then( m => m.EditProductPageModule)
  },
  {
    path: 'categories-form',
    loadChildren: () => import('./categories-form/categories-form.module').then( m => m.CategoriesFormPageModule)
  },
  {
    path: 'categories-list',
    loadChildren: () => import('./categories-list/categories-list.module').then( m => m.CategoriesListPageModule)
  },
  {
    path: 'edit-categories',
    loadChildren: () => import('./edit-categories/edit-categories.module').then( m => m.EditCategoriesPageModule)
  },
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
