import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesListComponent } from './pages/recipes-list/recipes-list.component';
import { CreateRecipeComponent } from './pages/create-recipe/create-recipe.component';


const routes: Routes = [
  { path: '', component: RecipesListComponent },
  { path: 'create-recipe', component: CreateRecipeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
