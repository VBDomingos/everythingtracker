import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { CardComponent } from './features/card/card.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'card-component', component: CardComponent}
];
