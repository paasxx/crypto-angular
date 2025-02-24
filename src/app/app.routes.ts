import { Routes } from '@angular/router';
import { CryptoListComponent } from './pages/crypto-list/crypto-list.component';

export const routes: Routes = [

    {
        path: '',
        pathMatch: 'full',
        component: CryptoListComponent
    },
    
];
