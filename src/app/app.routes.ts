import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'desk',
        loadComponent: () => import('./desk/desk.component'),
        children: [
            {
                path: 'dashboard',
                title: 'Dashboard',
                loadComponent: () => import('./desk/dashboard/dashboard.component')
            },
            {
                path: 'pet-form',
                title: 'Pet Form',
                loadComponent: () => import('./desk/pet-form/pet-form.component')
            },
            {
                path: 'pet-profile/:id',
                title: 'Pet View',
                loadComponent: () => import('./desk/pet-profile/pet-profile.component')
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            }
        ]
    }, 
    {
        path: '',
        redirectTo: '/desk',
        pathMatch: 'full'
    }
];
