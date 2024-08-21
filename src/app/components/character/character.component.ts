import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { AppComponent } from '../../app.component';
import { CharacterServiceService } from '../../services/character-service.service';
import { Character } from '../../models/character';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [AppComponent, NgOptimizedImage , RouterLink],
  templateUrl: './character.component.html',
  styleUrl: './character.component.css',
})
export class CharacterComponent {
  // @Input() title = '';
  // @Output() titleChange = new EventEmitter<string>();
  
  index = 0;
  animationClass = 'fade-in';
  style = '';
  @Input() characters: Character[] = []; //Input only accepts when the value is passed from the parent component
  character: Character | undefined;
  
  constructor(private characterService: CharacterServiceService) {
    this.characterService.getCharacters().then((characters) => {
      this.characters = characters;
      
    });
  }

  // changeStatus(character: Character) {
  //   character.available = !character.available;
  // }

  showNextCharacter(index: number): void { 
    this.transform(this.index);
  }

  searchCharacters(name: string): void {
    this.characterService.getCharacters(name).then((characters) => {
      this.characters = characters
    });
  }

  // searchCharacters(name: string): void {
  //   this.characterService.getCharacters().then((characters) => {
  //     this.characters = characters.filter((character) => character.name.toLowerCase().includes(name.toLowerCase()));
  //   });
  // }

  transform(index: number): void {
    this.animationClass = 'fade-out';
    setTimeout(() => {
      if (index === this.characters.length - 1) {
        this.animationClass = 'fade-in';
        this.index = 0;
      } else {
        this.animationClass = 'fade-in';
        this.index++;
      }
    }, 300);
  }
  // changeTitle() {
  //   this.style = 'display: none';
  //   this.titleChange.emit('Dragon Ball Z');
  // }
}
