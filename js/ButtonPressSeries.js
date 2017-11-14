function ButtonPressSeries() {

    this.buttonPresses = [];

    this.getRandomNumber = () => Math.floor((Math.random() * 4) + 1);

    this.addButtonPress = () => {
        let newBtnPessId = this.getRandomNumber();
        let btnId = "button-" + newBtnPessId;
        let audId = "audio-" + newBtnPessId;
        let soundWait = this.buttonPresses.length * 1000;
        let newBtnPress = new ButtonPress( btnId,audId,soundWait);
        this.buttonPresses.push(newBtnPress);      
    }

    this.present = () => {
        this.buttonPresses.forEach((element)=> element.buttonPress());
    }


    // delay all sounds by 1.5 seconds to make room for the "wrong beep" 
    // that needs to go first when user clicks the wrong button.

    this.delaySoundWait = () => {
        this.buttonPresses.forEach( (element,index) => element.setSoundWait((index+1)*1000 )) ;

    }

    // reset sound wait delay back to normal - which is one second apart, starting with 0
    // eg: 0 seconds for beep#1, 1 second for beep#2, etc...
    
    this.resetSoundWait = () => {
        this.buttonPresses.forEach( (element,index) => element.setSoundWait(index*1000 ));

    }
    this.getButtonId = btnIdIndex => this.buttonPresses[btnIdIndex].getBtnId();

    this.reset = () => this.buttonPresses = [];

    this.getNumOfBtnPresses = () => this.buttonPresses.length;

};