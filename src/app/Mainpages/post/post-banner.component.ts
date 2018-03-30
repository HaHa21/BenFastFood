import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';

import { PostDirective } from './post.directive';
import { PostService } from './post.service';
import { PostItem } from './post-item';

@Component({
   selector: 'post-banner',
   templateUrl: './post.component.html',
   styleUrls: ['./post.component.css']

})

export class PostBannerComponent implements OnInit, OnDestroy { 

    @Input() ads : PostItem[];
    currentAdIndex : number = -1;

    @ViewChild (PostDirective) postHost : PostDirective; 

    interval : any;

    constructor(private componentFactoryResolver : ComponentFactoryResolver ) { }

    ngOnInit(){
       this.loadComponent();
       this.getAds();
    }

    ngOnDestroy() {
    clearInterval(this.interval);
    }

    loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    let adItem = this.ads[this.currentAdIndex];

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    let viewContainerRef = this.postHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<PostComponent>componentRef.instance).data = adItem.data;
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
} 