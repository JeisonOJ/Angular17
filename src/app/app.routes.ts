import { Routes } from '@angular/router';
import { CharacterComponent } from './character/character.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Home',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        title: 'Home',
        component: HomeComponent
    },
    {
        path: 'character',
        title: 'Character',
        component: CharacterComponent
    },
    {
        path: 'form',
        title: 'form',
        component: FormComponent
    }
];
