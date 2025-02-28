import { Routes } from '@angular/router';
import { CryptoListComponent } from './pages/crypto-list/crypto-list.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [

    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
    },
    {
        path: 'data',
        pathMatch: 'full',
        component: CryptoListComponent
    },
    
];
