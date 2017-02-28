import { Component, OnInit } from '@angular/core';

import { Capa } from '../@components/card/capa.class';
import { HomeService } from './home.service';

@Component({
    selector: 'my-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    public isCopied2: any;
    public capas: Array<Capa>;
    public sampleContent = '';

    constructor(public service: HomeService) {
        this.service.getList().then(res => {
            this.capas = res;
        });
    }

    ngOnInit() { }


    show(entrada: any) : boolean{
        console.log('Entrada:', entrada);
        return true;
    }
}

