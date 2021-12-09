import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListFlowersComponent } from './flowers/list-flowers/list-flowers.component';
import { ListDaysComponent } from './days/list-days/list-days.component';
import { ListCitiesComponent } from './cities/list-cities/list-cities.component';
import { ListMonthsComponent } from './months/list-months/list-months.component';
import { ListMealsComponent } from './meals/list-meals/list-meals.component';

@NgModule({
  declarations: [
    AppComponent,
    ListMonthsComponent,
    ListDaysComponent,
    ListFlowersComponent,
    ListCitiesComponent,
    ListMealsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
