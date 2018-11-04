import { NgModule } from '@angular/core'
import { FormsModule }    from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';

import {PostService} from './posts.services';
import { RoutingPostModule, RoutingComponents } from './RoutingModule';


@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      HttpClientModule,
      RoutingPostModule
    ],
  
    declarations: [
      RoutingComponents
    ],
  
    providers: [
      PostService
    ]

  })

export class PostModule {}