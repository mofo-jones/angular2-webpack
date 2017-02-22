import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { Menu } from './menu.class';

@Component({
    selector: 'my-menu',
    templateUrl: './menu.component.html',
    styles: ['./menu.component.scss'],
    animations: [
        trigger('menuState', [
            state('inactive', style({
                transform: 'scale(1)'
            })),
            state('active', style({
                // backgroundColor: '#cfd8dc',
                color: '#fff',
                transform: 'scale(1.1)'
            })),
            transition('inactive => active', animate('100ms ease-in')),
            transition('active => inactive', animate('100ms ease-out'))
        ])
    ]
})

export class MenuComponent implements OnInit {

    private menus;

    constructor() {
        // console.log('Menu');
        // console.log(Menu);
        this.menus = [
            new Menu('Angular 2', '', 'info', 'inactive'),
            new Menu('PHP7', 'about', 'post', 'inactive'),
            new Menu('HTML5', 'post', 'about', 'inactive'),
            new Menu('Templates', 'templates', 'info', 'inactive'),
            new Menu('CodeIgniter4', 'ci4', 'info', 'inactive'),
            new Menu('Databases', 'databases', 'info', 'inactive'),
            new Menu('IDE + Editores', 'ide', 'info', 'inactive'),
            new Menu('Sobre Nós?', 'about', 'info', 'inactive')
        ];
        // setInterval(() => { this.menus[0].toggleState()}, 1000);
    }

    ngOnInit() { }
}
