import { Router } from "@angular/router";
import {Component} from '@angular/core';

@Component({
    templateUrl: './main.component.html',
    styleUrls:['./main.component.css']
})

export class MainComponent{

    constructor(
        private router: Router
    ){}
    gotoCarpool(){
        this.router.navigateByUrl('offer_want');
    }

    // gotoGraduateCheck(){
    //     this.router.navigateByUrl('GraduateCheck');
        
    // }

    // gotoUsedCar(){
    //     this.router.navigateByUrl('UsedCar');
        
    // }

}