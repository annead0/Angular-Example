import { BrowserModule } from '@angular/platform-browser';
<<<<<<< Updated upstream
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
=======
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

>>>>>>> Stashed changes
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }