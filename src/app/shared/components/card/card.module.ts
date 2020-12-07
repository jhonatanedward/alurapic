import { CommonModule } from '@angular/common';
import { Input, NgModule } from '@angular/core';
import { CardComponent } from './card.component';

@NgModule({
    declarations:[
        CardComponent
    ],
    exports:[
        CardComponent
    ],
    imports:[
        CommonModule
    ]
})
export class CardModule{

    @Input() title:string= '';
}