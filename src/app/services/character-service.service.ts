import { Injectable } from '@angular/core';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterServiceService {

  characters: Character[] = [
    {
      id: 1,
      name: 'Goku',
      avatar: 'https://dragonball-api.com/transformaciones/goku_ssj.webp',
      available: true,
    },
    {
      id: 2,
      name: 'Goku ssj2',
      avatar: 'https://dragonball-api.com/transformaciones/goku_ssj2.webp',
      available: true,
    },
    {
      id: 3,
      name: 'Goku ssj3',
      avatar: 'https://dragonball-api.com/transformaciones/goku_ssj3.webp',
      available: true,
    },
    {
      id: 4,
      name: 'Goku ssj blue',
      avatar: 'https://dragonball-api.com/transformaciones/goku_ssjb.webp',
      available: true,
    },
    {
      id: 5,
      name: 'Goku ultra instinct',
      avatar: 'https://dragonball-api.com/transformaciones/goku_ultra.webp',
      available: true,
    },
  ];

  getCharacters():Character[] {
    return this.characters;
  }
  getCharacterById(id: number):Character | undefined {  
    return this.characters.find(character => character.id === id);
  }

  createCharacter(character: Character): Character {
    this.characters.push(character);
    return character;
  }

  
}
