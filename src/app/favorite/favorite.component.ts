import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent implements OnInit {
  @Input() favoriteRef: any;
  @Output() deleted = new EventEmitter<void>();

  showRecipe: boolean = false;

  constructor() {}

  toggleForm() {
    this.showRecipe = !this.showRecipe;
  }

  deleteRecipe() {
    this.deleted.emit();
  }

  ngOnInit(): void {}
}
