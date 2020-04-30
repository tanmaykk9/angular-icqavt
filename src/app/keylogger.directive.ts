import { Directive, HostListener } from '@angular/core';
import {KEYCODE} from './key-code.enum';

@Directive({
  selector: '[appKeylogger]'
})
export class KeyloggerDirective {

  constructor() { 

  }


  @HostListener('window:keyup', ['$event'])
 
  keyEvent(event: KeyboardEvent) {
    var target = event.target;
    // Can be Dynamic, But Static for flexibility
    var logKeyEvent = "[KEYPRS]";
    var logBtnEvent = "[BUTTON]";

    // Current Time to Print as per requirement
    Date.prototype.timeNow = function () {
      // Inherited Date Time Object to print Only Time as per requirement
      return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
    }
    var newDate = new Date();
    var datetime = newDate.timeNow();
     //debugger
    if(target.tagName === "BODY") {
      event.preventDefault();
    } 
    if(target.tagName === "INPUT") {
      if(event.type === "keyup") {
        // var date = new Date().getDate().toString();
        // var month = new Date().getMonth().toString();
        // var year = new Date().getFullYear().toString();
        // var printDate = '[' + date + '-' + month + '-' + year + ']';
  
        console.log(datetime + ' - ' + logKeyEvent + ' - ' + event.key + ' key pressed');
      }

    //  if (event.keyCode === KEYCODE.RIGHT_ARROW) {
    //   console.log("Right Arrow Clicked");
    // }
    //   if (event.keyCode === KEYCODE.LEFT_ARROW) {
    //   console.log("Left arrow Clicked");
    // }
    } 
    if(target.tagName === "BUTTON") {
      // console.log("Mix Drink pressed");
      if(event.code === "Enter") {
        //console.log("Button Pressed");
        console.log(datetime + ' - ' + logBtnEvent + ' - ' + target.innerText + ' Button has been clicked');
      } else {
        event.preventDefault();
      }
    }
  } 
}