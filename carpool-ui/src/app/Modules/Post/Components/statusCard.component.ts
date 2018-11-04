import {Component} from '@angular/core';
import { PostService } from '../posts.services';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    templateUrl:'./statusCard.component.html'
})

export class StatusCardComponent {
    constructor(
        private PostService: PostService
    ){}

    getStatus(){
        this.PostService.getStatus();
    }

}
