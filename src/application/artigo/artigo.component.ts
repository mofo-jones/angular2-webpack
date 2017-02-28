import { Component, AfterViewInit, OnInit, QueryList, ElementRef, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ArtigoService } from './artigo.service';
import { HighlightJsService } from '../../../node_modules/angular2-highlight-js/lib/highlight-js.service';

@Component({
    selector: 'my-artigo',
    templateUrl: './artigo.component.html',
    styleUrls: ['./artigo.component.scss']
})

export class ArtigoComponent implements OnInit, AfterViewInit {

    public sampleContent: any;
    public conteudos: any = [];
    public inputTarget: any = '';

    @ViewChildren('codes') public codes: QueryList<ElementRef>;

    constructor(private service: ArtigoService, private route: ActivatedRoute, private serviceJs: HighlightJsService) {
        this.route.params.subscribe(params => {
            if (params['id']) {
                this.service.get(params['id']).then(res => {
                    this.conteudos = res.conteudos;
                });
            }
        });
    }

    ngOnInit() { }

    ngAfterViewInit() {
        this.codes.changes.subscribe(data => this.highlightByService(data));
    }

    highlightByService(targets: QueryList<ElementRef>) {
        for (let target of targets.toArray()) {
            this.serviceJs.highlight(target.nativeElement);
        }
    }
}
