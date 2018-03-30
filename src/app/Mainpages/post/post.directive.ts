import { Directive, ViewContainerRef } from '@angular/core';

@Directive({

  selector: '[MyPost]',

})

export class PostDirective {
      constructor(public viewContainerRef: ViewContainerRef) { }

} 