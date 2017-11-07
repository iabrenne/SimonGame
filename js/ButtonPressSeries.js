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


    this.getButtonId = btnIdIndex => this.buttonPresses[btnIdIndex].getBtnId();

    this.reset = () => this.buttonPresses = [];

    this.getNumOfBtnPresses = () => this.buttonPresses.length;

};