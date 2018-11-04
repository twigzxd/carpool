import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import {PostService} from '../posts.services';
import { Router } from '@angular/router';


@Component({
    templateUrl: './carpoolOffer.component.html'
  })

export class CarpoolOfferComponent{
    

    constructor(
        private PostService: PostService
    ){}

    public payload: any = {};


  

    onSubmit(payload){
        this.PostService.submit(payload)
        .subscribe(
            response => console.log('Success!',response),
            error => console.error('Error!', error)
        );
        
    }
  
}