import { Component, OnInit } from '@angular/core';
import {PostService} from '../posts.services';
import { Router } from '@angular/router';

@Component({
  templateUrl: './carpoolCalender.component.html'
})
export class CarpoolCalenderComponent implements OnInit {

  constructor(
    private PostService: PostService,
    private router: Router
  ){}

  ngOnInit() {
  }

  // let dt = new Date();
    // document.getElementById("Datetime").innerHTML = (("0"+dt.getDate()).slice(-2)) +"."+ 
    //                                                 (("0"+(dt.getMonth()+1)).slice(-2)) +"."+ (dt.getFullYear()) +" "+ 
    //                                                 (("0"+dt.getHours()).slice(-2)) +":"+ (("0"+dt.getMinutes()).slice(-2));

  
  

}
