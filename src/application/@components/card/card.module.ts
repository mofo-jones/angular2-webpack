import { NgModule } from '@angular/core';
import { CardComponent } from './card.component';
import { CardService } from './card.service';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    declarations: [CardComponent],
    exports: [CardComponent],
    providers: [CardService]
})

export class CardModule { }
