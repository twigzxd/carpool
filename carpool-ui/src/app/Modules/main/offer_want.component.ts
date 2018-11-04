import { Router } from "@angular/router";
import {Component} from '@angular/core';

@Component({
    templateUrl: './offer_want.component.html',
    styleUrls:['./offer_want.component.css']
    
})

export class OfferWantComponent{
    constructor(
        private router: Router
    ){}
}