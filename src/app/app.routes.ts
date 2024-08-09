import { Routes } from '@angular/router';
import { CharacterComponent } from './components/character/character.component';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';


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
