import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-days',
  templateUrl: './list-days.component.html',
  styleUrls: ['./list-days.component.css']
})
// export class ListDaysComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
export class ListDaysComponent {
  days:string[]=['Lunes', 'Martes','Miercoles','Jueves','Viernes','Sabado','Domingo']

  delete:string|undefined='';
  deleteDay(){
    this.delete=this.days.pop();
  }
}
