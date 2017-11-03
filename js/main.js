function ButtonPress(btnId, audId) {
    this.btnId = btnId
    this.audId = audId,
    this.makeSound = (waitMs) => { 
        setTimeout( () => document.getElementById(this.audId).play(), waitMs );
    }; 

    this.clickButton = (waitMs) => {    
        setTimeout( () => document.getElementById(this.btnId).setAttribute("style","box-shadow: inset 0px 0px 8px #ccc"),waitMs) ;
    };

    this.releaseButton = (waitMs) => {    
        setTimeout( () => document.getElementById(this.btnId).setAttribute("style","2px 2px 2px #ccc;"),waitMs) ;
    };
  
};

let buttonPress1 = new ButtonPress("button-1","audio-1");
let buttonPress2 = new ButtonPress("button-2","audio-2");
let buttonPress3 = new ButtonPress("button-3","audio-3");
let buttonPress4 = new ButtonPress("button-4","audio-4");

buttonPress1.makeSound(0);
buttonPress1.clickButton(100);
buttonPress1.releaseButton(700);
buttonPress2.makeSound(1000);
buttonPress2.releaseButton(1700);
buttonPress2.clickButton(1100);
buttonPress3.makeSound(2000);
buttonPress3.clickButton(2100);
buttonPress3.releaseButton(2700);
buttonPress4.makeSound(3000);
buttonPress4.clickButton(3100);
buttonPress4.releaseButton(3700);


