import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-meals',
  templateUrl: './list-meals.component.html',
  styleUrls: ['./list-meals.component.css']
})
// export class ListMealsComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
export class ListMealsComponent{
  meals:string[]=['Sopa', 'Pizza','Paella','Tarta','Pasta','Rissotto','Pescado','Tartaleta']

  deleteMeals(){
    this.meals=[];
  }
}
