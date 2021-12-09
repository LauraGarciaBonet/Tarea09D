import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-months',
  templateUrl: './list-months.component.html',
  styleUrls: ['./list-months.component.css']
})
// export class ListMonthsComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
export class ListMonthsComponent{
  months:string[]=['Enero', 'Febrero','Marzo','Abril','Mayo','Junio','Julio', 'Agosto','Septiembre','Octubre','Noviembre','Diciembre']

  delete:string|undefined='';
  deleteMonth(){
    this.delete=this.months.pop();
  }
}
