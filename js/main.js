function ButtonPress(btnId, audId, soundWait) {
    this.btnId = btnId;
    this.audId = audId;
    this.soundWait = soundWait;

    this.makeSound = (waitMs) => { 
        setTimeout( () => document.getElementById(this.audId).play(), waitMs );
    }; 

    this.clickButton = (waitMs) => {    
        setTimeout( () => document.getElementById(this.btnId).setAttribute("style","box-shadow: inset 0px 0px 8px #ccc"),waitMs) ;
    };

    this.releaseButton = (waitMs) => {    
        setTimeout( () => document.getElementById(this.btnId).setAttribute("style","2px 2px 2px #ccc;"),waitMs) ;
    };

    this.buttonPress = () => {

        setTimeout ( () => {
            this.makeSound(0);
            this.clickButton(100);
            this.releaseButton(700);
        }, this.soundWait );
 };  
    
};

let buttonPress1 = new ButtonPress("button-1","audio-1",0);
let buttonPress2 = new ButtonPress("button-2","audio-2",1000);
let buttonPress3 = new ButtonPress("button-3","audio-3",2000);
let buttonPress4 = new ButtonPress("button-4","audio-4",3000);

buttonPress1.buttonPress();
buttonPress2.buttonPress();
buttonPress3.buttonPress();
buttonPress4.buttonPress();



