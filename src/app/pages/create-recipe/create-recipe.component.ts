import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';
import { RecipeService } from 'src/app/shared/recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.scss']
})
export class CreateRecipeComponent implements OnInit {

  recipe = new Recipe();

  constructor(private recipeService: RecipeService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.recipeService.post(this.recipe).subscribe((recipe) => {
      this.router.navigateByUrl('');
    });
  }

}
