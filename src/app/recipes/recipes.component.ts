import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  @Input() recipeRef: any;

  showRecipe: boolean = false;

  showFavorite: boolean = false;

  constructor(private service: RecipesService) {}

  addFavorite(favorite: any) {
    this.service.addFavorite(favorite);
    this.toggleFavorite();
  }

  toggleForm() {
    this.showRecipe = !this.showRecipe;
  }

  toggleFavorite() {
    this.showFavorite = !this.showFavorite;
  }

  ngOnInit(): void {}
}
