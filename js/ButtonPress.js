function ButtonPress(btnId, audId, soundWait) {
    this.btnId = btnId;
    this.audId = audId;
    this.soundWait = soundWait;

    this.getBtnId = () => this.btnId;

    this.setAudId = audId => this.audId = audId ;

    this.makeSound = waitMs => { 
        setTimeout( () => { 
            let aud = document.getElementById(this.audId);

            // .mp3 for the wrong buzzer is way longer than the regular sounds.
            // since we cant change duration of an audio element, we are
            // changing currentTime property instead. This way it appears
            // that wrong buzzer has the same length as the rest of the
            // sounds.
            
            if(this.audId == "wrong")
                aud.currentTime = 0.638041;

            aud.play();
                        
        }, waitMs );
    }; 

    this.clickButton = waitMs => {    
        setTimeout( () => document.getElementById(this.btnId).setAttribute("style","box-shadow: inset 0px 0px 8px #ccc"),waitMs) ;
    };

    this.releaseButton = waitMs => {    
        setTimeout( () => document.getElementById(this.btnId).setAttribute("style","6px 12px 20px #ccc;"),waitMs) ;
    };

    this.setSoundWait = (soundWait) => this.soundWait = soundWait;
    
    this.buttonPress = () => {
        setTimeout ( () => {
            this.clickButton(0);
            this.makeSound(100);            
            this.releaseButton(700);
        }, this.soundWait );
    };  
    
};

