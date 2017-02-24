import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ArtigoComponent } from './artigo.component';
import { ArtigoService } from './artigo.service';

import { ClipboardModule } from 'ngx-clipboard';

import { RouterModule } from '@angular/router';
import { CardModule } from '../@components/card/card.module';
import { MenuModule } from '../@components/menu/menu.module';
import { routing } from './artigo.routing';

@NgModule({
    imports:
    [
        routing,
        RouterModule,
        CommonModule,
        FormsModule,
        ClipboardModule,
        MenuModule,
        CardModule
    ],
    declarations:
    [
        ArtigoComponent
    ],
    exports:
    [
        ArtigoComponent
    ],
    providers:
    [
        ArtigoService
    ]
})
export class ArtigoModule { }
