function ButtonPress(btnId, audId) {
    this.btnId = btnId
    this.audId = audId,
    this.makeSound = (waitMs) => { 
        setTimeout( () => document.getElementById(this.audId).play(), waitMs );
        }; 
    
};

let buttonPress1 = new ButtonPress("button-1","audio-1");
let buttonPress2 = new ButtonPress("button-2","audio-2");
let buttonPress3 = new ButtonPress("button-3","audio-3");
let buttonPress4 = new ButtonPress("button-4","audio-4");

buttonPress1.makeSound(0);
buttonPress2.makeSound(1000);
buttonPress3.makeSound(2000);
buttonPress4.makeSound(3000);



