import { Injectable } from '@angular/core';
import { API } from '../models/apiResponse';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterServiceService {
  private url = 'https://dragonball-api.com/api/characters';
  characters: Character[] = []

  async getCharacters():Promise<Character[]> {
    const response = await fetch(this.url);
    const data: API = await response.json();
    this.characters = data.items ?? [];
    return this.characters;
  }
  // getCharacterById(id: number):Character | undefined {  
  //   return this.characters.find(character => character.id === id);
  // }

  async getCharacterById(id: number):Promise<Character | undefined> {
    const response = await fetch(`${this.url}/${id}`);
    const data: Character = await response.json()??{};
    return data;
    
  }
  createCharacter(character: Character): Character {
    this.characters.push(character);
    return character;
  }

  
}
