import { Directive, HostListener } from '@angular/core';

export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37
}

@Directive({
  selector: '[appKeylogger]'
})
export class KeyloggerDirective {

  constructor() { }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log(event);
     if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
      console.log("Right Arrow Clicked");
    }
      if (event.keyCode === KEY_CODE.LEFT_ARROW) {
      console.log("Left arrow Clicked");
    }
  } 
}