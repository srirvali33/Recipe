import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RecipesComponent } from './Recipe/recipes/recipes.component';
import { HeaderComponent } from './Header/header/header.component';
import { RecipeslistComponent } from './Recipe/recipes/recipeslist/recipeslist.component';
import { RecipedetailsComponent } from './Recipe/recipes/recipedetails/recipedetails.component';
import { RecipeitemComponent } from './Recipe/recipes/recipeslist/recipeitem/recipeitem.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist/shoppinglist.component';
import { ShoppingeditComponent } from './shoppinglist/shoppinglist/shoppingedit/shoppingedit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeslistComponent,
    RecipedetailsComponent,
    RecipeitemComponent,
    ShoppinglistComponent,
    ShoppingeditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
