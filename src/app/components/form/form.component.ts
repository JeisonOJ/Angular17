import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Character } from '../../models/character';
import { CharacterServiceService } from '../../services/character-service.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  form = new FormGroup({
    name: new FormControl('',Validators.required),
    // email: new FormControl('',[Validators.required, Validators.email]),
    imageUrl: new FormControl('',Validators.required),
    available: new FormControl(true)
  });
  character: Character|undefined;
  characterService: CharacterServiceService = inject(CharacterServiceService)
  onSubmit() {
    this.character = {
      id: 6,
      name: this.form.value.name??'',
      avatar: this.form.value.imageUrl??'',
      available: this.form.value.available??true
    };
    ;
    if(this.characterService.createCharacter(this.character)){
      alert("created")
    }
  }
}
