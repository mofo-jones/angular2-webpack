import { Routes, RouterModule } from '@angular/router';

import { ArtigoComponent } from './artigo.component';


const routes: Routes = [

    {
        path: 'artigo',
        children: [
            { path: '', component: ArtigoComponent },
            { path: ':id', component: ArtigoComponent },
//                        { path: 'contatoFormList', component: ContatoFormList },
//                        { path: 'contatoFormList/:clientesId', component: ContatoFormList },
//                        { path: 'contatoFormList/:clientesId/:id', component: ContatoFormList }
        ]

    }
];

export const routing = RouterModule.forChild(routes);
