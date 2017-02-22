import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { HomeService } from './home.service';

import { ClipboardModule } from 'ngx-clipboard';

import { RouterModule } from '@angular/router';
import { CardModule } from '../@components/card/card.module';
import { MenuModule } from '../@components/menu/menu.module';

@NgModule({
    imports:
    [
        RouterModule,
        CommonModule,
        FormsModule,
        ClipboardModule,
        MenuModule,
        CardModule
    ],
    declarations:
    [
        HomeComponent
    ],
    exports:
    [
        HomeComponent
    ],
    providers:
    [
        HomeService
    ]
})
export class HomeModule { }
