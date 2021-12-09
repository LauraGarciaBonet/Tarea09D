import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-cities',
  templateUrl: './list-cities.component.html',
  styleUrls: ['./list-cities.component.css']
})
// export class ListCitiesComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
export class ListCitiesComponent {
  cities:string[]=['Madrid', 'Roma','Berlin','Caracas','Guangzhou','Estambul','Lima']

  newList:string|any=[];
  delete:string|undefined='';
  deleteCity(){
    this.delete=this.list.pop();
    this.newList.push(this.delete);
  }
  list:string[]=[];
  showCity(){
    this.cities.map((city)=>{
      return this.list.push (city)
    })
    }

}
