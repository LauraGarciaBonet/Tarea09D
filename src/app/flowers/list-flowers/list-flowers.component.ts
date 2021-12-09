import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-flowers',
  templateUrl: './list-flowers.component.html',
  styleUrls: ['./list-flowers.component.css']
})
// export class ListFlowersComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
export class ListFlowersComponent {
  flowers:string[]=['Margaritas', 'Rosas','Tulipanes','Hortensias','Girasoles','Claveles','Proteas','Hibiscos']

  deleteFlowers(){
    this.flowers=[];
  }
}
