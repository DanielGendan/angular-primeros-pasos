import { DbzService } from './../services/dbz.service.ts.service';
import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  constructor(private DbzService: DbzService){

  }

  get characters(): Character[]{
    return [...this.DbzService.characters]
  }

  onDeleteCaracter(id: string): void{

    this.DbzService.onDeleteById(id);
  }

  onNewCaracter(character: Character): void{
    this.DbzService.addCharacter(character);

  }

}
