import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipeslist',
  templateUrl: './recipeslist.component.html',
  styleUrls: ['./recipeslist.component.css']
})
export class RecipeslistComponent implements OnInit {

  recipes: Recipe[]=[

    new Recipe('Strawberry Bread','This is wonderful hot or cold, for breakfast or as a dessert. A definite family favorite!','https://images.media-allrecipes.com//userphotos/250x250/836956.jpg'),
    new Recipe('Chocolate Chip Muffins','You will not believe how easily and quickly you can have chocolate chip muffins on the table using this recipe','https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4470819.jpg&w=272&h=272&c=sc&poi=face&q=85'),
    new Recipe('Creamy Doughnuts','It is one of the best versions of glazed doughnuts, and this one finally came out perfect! Just like the ones at your favorite doughnut shop.','https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F3929613.jpg&w=272&h=272&c=sc&poi=face&q=85'),
    new Recipe('Soft Pretzels','These are great plain with a bit of pretzel salt or coated with cinnamon and sugar.','https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F7010422.jpg&w=272&h=272&c=sc&poi=face&q=85')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
