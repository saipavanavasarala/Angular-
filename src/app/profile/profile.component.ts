import { Component, signal, effect, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

@Component({
    selector: "app-profile",
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: "./profile.component.html",
    styleUrl: "./profile.component.css"
})

export class ProfileComponent{
    // name:string = ""
    // showname:string = ""
    // email = ""
    // getName(event:Event) {
    //     let val = (event.target as HTMLInputElement).value
    //     this.name = val
    // }
    // showName() {
    //     this.showname = this.name
    // }
    // setName() {
    //     this.name = "Abhi"
    // }
    // getEmail(val:string){
    //     this.email = val
    // }
    // setEmail() {
    //     this.email = "default@email.com"
    // }
    // count:number = 0

    // handleCounter(val:string) {
    //     if(val === 'minus' && this.count > 0) {
    //         this.count = this.count - 1;
    //     }else if(val === 'plus') {
    //         this.count = this.count + 1;
    //     } else {
    //         this.count = 0;
    //     }
    // }

    // handleEvent(event:Event) {
    //     console.log("event", (event.target as HTMLInputElement).className)
    // }


    // display = false
    // toggle() {
    //     this.display = !this.display
    // }

    // color = 'blue'

    // handleColor(val:string) {
    //     this.color = val
    // }

    // students = [
    //     {
    //         name : "Anil",
    //         age : 29,
    //         email : "anil@test.com"
    //     },
    //     {
    //         name : "Arun",
    //         age : 26,
    //         email : "arun@test.com"
    //     },
    //     {
    //         name : "Rakesh",
    //         age : 25,
    //         email : "rakesh@test.com"
    //     }
    // ]
    // classname= 'h1tag';
    // count =signal(10);
    // x = 12;

    // constructor() {
    //     effect(() => {
    //         console.log(this.count());
            
    //     })
    // }
    // increaseX() {
    //     this.x = this.x+1
    //     // console.log(this.x)
    // }
    // increaseSignal() {
    //     this.count.set(this.count()+1);
    //     // console.log(this.count())
    // }
    // public required = true;
    // public myStyles = {
    //     color: 'blue',
    //     fontSize: '60px',
    // }
    // public data = ""

    // name = "Suja"
    // status = true
    myChoice = 'two'

    persons = ['Anil', 'Anup', 'Balaji', 'Suja'];

    @Input() public fromParent!:string;

    // @Output() public childInfo = new EventEmitter();

    // childMsg() {
    //     this.childInfo.emit("This is message from child");
    // }
    str = "Suja associates"
}