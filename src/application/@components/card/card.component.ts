import { Component, OnInit, Input } from '@angular/core';
// import { Card } from './card.class';
// import { CardService } from './card.service';

@Component({
    selector: 'my-card',
    templateUrl: 'card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
    @Input() capa;

    constructor() {
        // console.log('Card', );
    }

    ngOnInit() {
        // console.log('Card:>', this.card.title);
    }
}
