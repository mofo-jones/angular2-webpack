import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ArtigoModule } from './artigo/artigo.module';
import { AboutComponent } from './about/about.component';
import { ApiService } from './shared';
import { routing } from './app.routing';

import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';

import { CardModule } from './@components/card/card.module';
import { MenuModule } from './@components/menu/menu.module';

@NgModule({
    imports:
    [
        BrowserModule,
        HttpModule,
        FormsModule,
        routing,
        HighlightJsModule,
        CardModule,
        MenuModule,
        HomeModule,
        ArtigoModule
    ],
    declarations:
    [
        AppComponent,
        AboutComponent
    ],
    providers:
    [
        ApiService,
        HighlightJsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(public appRef: ApplicationRef) { }
    hmrOnInit(store) {
        console.log('HMR store', store);
    }
    hmrOnDestroy(store) {
        let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
        // recreate elements
        store.disposeOldHosts = createNewHosts(cmpLocation);
        // remove styles
        removeNgStyles();
    }
    hmrAfterDestroy(store) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    }
}
