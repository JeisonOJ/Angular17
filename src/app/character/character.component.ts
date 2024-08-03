import { Component } from '@angular/core';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [],
  templateUrl: './character.component.html',
  styleUrl: './character.component.css',
})
export class CharacterComponent {
  index = 0;
  animationClass = 'fade-in';
  characters = [
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
}
