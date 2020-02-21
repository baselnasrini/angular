import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]= [
    new Recipe('Kubba','Great dish from Aleppo', 'https://lh3.googleusercontent.com/proxy/E_mfVYLEQMHef2GqRuN9TGNz7e_KX1CLPzFwuOvh9oXnN2KMxUfJrn_AyspbqpLOBUmDpVMwe5kAu4DYtPVzXzGJbB3lFcI'),
    new Recipe('Yabraq','Amazing dish from Syria', 'https://modo3.com/thumbs/fit630x300/42422/1438761199/%D9%83%D9%8A%D9%81%D9%8A%D8%A9_%D8%B7%D8%A8%D8%AE_%D8%A7%D9%84%D9%8A%D8%A8%D8%B1%D9%82_%D8%A7%D9%84%D8%B3%D9%88%D8%B1%D9%8A.jpg')

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
