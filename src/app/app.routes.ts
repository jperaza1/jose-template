
import { RouterModule, Routes } from '@angular/router';

import { 
    AboutComponent,
    PortafolioComponent,
    ItemComponent
} from './components/index.paginas';
import { SerachComponent } from './components/serach/serach.component';

const app_routes: Routes = [
    { path: 'home', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'item/:id', component: ItemComponent },
    { path: 'buscar/:termino', component: SerachComponent },
    { path: '**',pathMatch: 'full', redirectTo: 'home' }
];

export const app_roting = RouterModule.forRoot(app_routes, { useHash:true });
