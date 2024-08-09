import { Routes } from '@angular/router';
import { CharacterComponent } from './components/character/character.component';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';


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
        title: 'Form',
        component: FormComponent
    },
    {
        path: 'details/:id',
        title: 'Details',
        component: CharacterDetailsComponent
    }
];
