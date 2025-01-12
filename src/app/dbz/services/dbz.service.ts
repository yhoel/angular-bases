import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'
import { Character } from '../interfaces/character.interface';


@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public character: Character[] = [
    {
      id  : uuid(),
      name: 'Krillin',
      power:1000
    },
    {
      id  : uuid(),
      name: 'Goku',
      power: 10000
    },
    {
      id  : uuid(),
      name: 'Vegeta',
      power: 7500
    }
  ];


  addCharacter(  character: Character):void {
    // console.log("Main Page onNewCharacter");
    const newCharacter: Character = {id: uuid(), ...character};
    this.character.push(newCharacter);
    // console.log(character);

  }

  deleteCharacterById(id: string): void{
    // console.log("Main Page onDeleteId");
    this.character = this.character.filter( character => character.id !== id );
    //this.character.splice(index,1);
    // console.log({index});

  }

}
