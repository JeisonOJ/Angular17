import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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
    available: new FormControl()
  });

  onSubmit() {
    console.log(`Form submitted with ${this.form.value.name}, ${this.form.value.imageUrl}, ${this.form.value.available}`);
  }
}
