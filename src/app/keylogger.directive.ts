import { Directive, HostListener } from '@angular/core';
import {KEYCODE} from './key-code.enum';

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