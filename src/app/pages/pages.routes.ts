import {RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficasComponent } from './graficas/graficas.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';





const pagesRoutes : Routes=[
    {
        path: '', 
        component: PagesComponent,
        children: [ 
            {path: 'dashboard', component: DashboardComponent},
            {path: 'progreso', component: ProgressComponent},
            {path: 'graficas', component: GraficasComponent},
            {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
            {path: 'configuracion', component: AccountSettingsComponent},
        ]
        
    },
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);