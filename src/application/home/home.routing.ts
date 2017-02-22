import { Routes, RouterModule } from '@angular/router';

import { HomeModule } from './home.module';


const routes: Routes = [
    {
        path: '',
        component: HomeModule,
//        children: [
//            { path: 'contatoFormList', component: ContatoFormList },
//            { path: 'contatoFormList/:clientesId', component: ContatoFormList },
//            { path: 'contatoFormList/:clientesId/:id', component: ContatoFormList }
//        ]

    }
];

export const routing = RouterModule.forChild(routes);
