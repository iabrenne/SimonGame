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