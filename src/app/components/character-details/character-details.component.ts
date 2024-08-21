import { Component, inject } from '@angular/core';
import { Character } from '../../models/character';
import { ActivatedRoute } from '@angular/router';
import { CharacterServiceService } from '../../services/character-service.service';

@Component({
  selector: 'app-character-details',
  standalone: true,
  imports: [],
  templateUrl: './character-details.component.html',
  styleUrl: './character-details.component.css',
})
export class CharacterDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  character: Character | undefined;

  constructor(characterService: CharacterServiceService) {
    const idCharacter = Number(this.route.snapshot.params['id']);
    characterService.getCharacterById(idCharacter)
      .then((character: Character | undefined) => {
        this.character = character;
      });
  }
}
