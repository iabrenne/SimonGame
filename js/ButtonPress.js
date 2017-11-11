function ButtonPress(btnId, audId, soundWait) {
    this.btnId = btnId;
    this.audId = audId;
    this.soundWait = soundWait;

    this.getBtnId = () => this.btnId;

    this.setAudId = audId => this.audId = audId ;

    this.makeSound = waitMs => { 
        setTimeout( () => document.getElementById(this.audId).play(), waitMs );
    }; 

    this.clickButton = waitMs => {    
        setTimeout( () => document.getElementById(this.btnId).setAttribute("style","box-shadow: inset 0px 0px 8px #ccc"),waitMs) ;
    };

    this.releaseButton = waitMs => {    
        setTimeout( () => document.getElementById(this.btnId).setAttribute("style","6px 12px 20px #ccc;"),waitMs) ;
    };

    this.buttonPress = () => {
        setTimeout ( () => {
            this.clickButton(0);
            this.makeSound(100);            
            this.releaseButton(700);
        }, this.soundWait );
    };  
    
};

