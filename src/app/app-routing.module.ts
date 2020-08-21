import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';

const routes: Routes = [
  { path: 'search-criteria', component: SearchCriteriaComponent },
  { path: 'recipe-list', component: RecipeListComponent },
  { path: 'favorites-page', component: FavoritesPageComponent },
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: '**', component: SearchCriteriaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}