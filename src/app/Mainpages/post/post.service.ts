import { Injectable } from '@angular/core';

import { HealthComponent } from '../health/health.component';
import { PromotionComponent } from '../promotions/promotions.component';
import { PostItem } from './post-item';

@Injectable()
export class PostService {
  
   getAllPosts(){
     return [
        new PostItem(PromotionComponent, { name: 'Enjoy Pizza Promotion after 8pm!!' }),

        new PostItem(HealthComponent, { name: 'Exercise regularly' } )

        

     ];
   }
}
