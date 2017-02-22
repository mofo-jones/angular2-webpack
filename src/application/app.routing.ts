import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
// import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
    {
        path: '',
        children:
        [
            {
                path: '',
                component: HomeComponent
            }
        ]

    },
    { path: 'about', component: AboutComponent },
    { path: '**', redirectTo: '' },
];

export const routing = RouterModule.forRoot(routes);
