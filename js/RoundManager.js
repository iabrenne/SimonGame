function RoundManager(buttonPressSeries, round, step,readyForNextRound) {
    this.buttonPressSeries = buttonPressSeries;
    this.round = round;
    this.roundStep = step;
    this.readyForNextRound = readyForNextRound;
    
    this.incRound = () => this.round++;

    this.incRoundStep = () => this.roundStep++ ;

    this.zeroOutRoundStep = () => this.roundStep = 0;
    
    this.playerClickedCorrectButton = playerButtonId => {

      return  (buttonPressSeries.getButtonId(this.roundStep - 1) == playerButtonId);

    };

    this.playerPassedRound = () => buttonPressSeries.getNumOfBtnPresses() == this.roundStep;

    this.handleCorrectPlayerInput = plBtnPress => {
        plBtnPress.buttonPress();
        //advance to next round
        if (this.playerPassedRound())
            this.readyForNextRound = true;
        //let player click next button in the presented series
        else {
            this.incRoundStep();
            this.enableButtons();    
        }
    }; 

    this.handlePlayerInput = btnClickedByPlayer => {
        this.disableButtons();
        let plBtnId = btnClickedByPlayer.id;
        // get the id of the audio element for the button clicked by player
        let plAudId = btnClickedByPlayer.children[0].id;
        let plBtnPress = new ButtonPress(plBtnId, plAudId, 0);

        if (this.playerClickedCorrectButton(plBtnId))
            this.handleCorrectPlayerInput(plBtnPress);

        else {
            plBtnPress.setAudId("wrong");
            plBtnPress.buttonPress();
        }
    };

    this.disableButtons = () => {

        document.getElementById("button-1").disabled = true;
        document.getElementById("button-2").disabled = true;
        document.getElementById("button-3").disabled = true;
        document.getElementById("button-4").disabled = true;

    };

    // don't let player click until entire button press series 
    // has been played out
    this.enableButtons = () => {

        // let enableWait = (this.round + 0 ) * 1000;
        
        let enableWait = 500;

        setTimeout ( () => {
            document.getElementById("button-1").disabled = false;
            document.getElementById("button-2").disabled = false;
            document.getElementById("button-3").disabled = false;
            document.getElementById("button-4").disabled = false;
        }, enableWait)

        
 

    };

    this.presentButtonSeriesToPlayer = () => {
        this.buttonPressSeries.present();
        this.enableButtons();
    };

    this.nextRound = () => {
        this.readyForNextRound = false;
        this.disableButtons();
        this.incRound();
        this.zeroOutRoundStep();
        this.incRoundStep();        
        this.buttonPressSeries.addButtonPress();
        this.presentButtonSeriesToPlayer();
        

    };
};