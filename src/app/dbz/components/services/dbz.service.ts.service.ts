import { Character } from './../interfaces/character.interface';
import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
console.log(uuid())


@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Danny',
    power: 100000
  },
  {
    id: uuid(),
    name: 'Genesys',
    power: 100000
  }, {
    id: uuid(),
    name: 'Mercy',
    power: 75000
  }];

  addCharacter(character: Character): void {
    const newCharacte: Character = { id: uuid(), ...character }
    this.characters.push(newCharacte);
  }

  //  onDelete(index:number)
  //this.characters.splice(index)
  //}

  onDeleteById(id:string) {
    this.characters = this.characters.filter(character => character.id !==id);

  }

}
