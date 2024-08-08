import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  form = new FormGroup({
    name: new FormControl(''),
    imageUrl: new FormControl(''),
    available: new FormControl(false)
  });

  onSubmit() {
    console.log(`Form submitted with ${this.form.value.name}, ${this.form.value.imageUrl}, ${this.form.value.available}`);
  }
}
