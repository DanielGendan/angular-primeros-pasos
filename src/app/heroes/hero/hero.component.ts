import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'Iroman';
  public age: number = 35;

  get capitalizedName(): string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`
  }

  changeHero(): void{

    this.name = 'Spiderman';
  }

  changeAge(){
this.age = 25;

  }

  resetForm(): void{

    this.name = 'iroman';
    this.age = 25;

    document.querySelectorAll('h1')!.forEach ( element =>{
      element.innerHTML = '<h1>Desde angular</h1>';
    });
  }



}
