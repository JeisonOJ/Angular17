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
  @Input() characters: Character[] = [];
  
  constructor(private characterService: CharacterServiceService) {
    this.characters = this.characterService.getCharacters();
  }

  changeStatus(character: any) {
    character.available = !character.available;
  }

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
