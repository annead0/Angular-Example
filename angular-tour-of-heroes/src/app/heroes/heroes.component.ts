import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
   hero:Hero={
    id:1,
    name:'Windstorm'
   };
}
export default interface hero{
  id:number;
  name:string;
};