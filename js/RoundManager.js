function RoundManager(buttonPressSeries, round, step,readyForNextRound) {
    this.buttonPressSeries = buttonPressSeries;
    this.round = round;
    this.roundStep = step;
    this.readyForNextRound = readyForNextRound;

    this.setRound = (round) => { 
        this.round = round;
        document.getElementById("score").innerText = this.round;
    };
    
    this.incRound = () => { 
        this.setRound(this.round+1);
    };

    this.incRoundStep = () => this.roundStep++ ;

    this.zeroOutRoundStep = () => this.roundStep = 0;

    this.setRoundStep = roundStep => this.roundStep = roundStep;
    
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
            this.enableButtons("fromHandleCorrectPlayerInput");    
        }
    }; 

    this.handleIncorrectPlayerInput = plBtnPress => {

         plBtnPress.setAudId("wrong");
         this.buttonPressSeries.delaySoundWait();
         plBtnPress.buttonPress();
         this.presentButtonSeriesToPlayer();
         this.setRoundStep(1);


    };

    this.handlePlayerInput = btnClickedByPlayer => {
        this.disableButtons();
        let plBtnId = btnClickedByPlayer.id;
        // get the id of the audio element for the button clicked by player
        let plAudId = btnClickedByPlayer.children[0].id;
        let plBtnPress = new ButtonPress(plBtnId, plAudId, 0);

        if (this.playerClickedCorrectButton(plBtnId))
            this.handleCorrectPlayerInput(plBtnPress);

        else  
            this.handleIncorrectPlayerInput(plBtnPress);
           
    };

    this.disableButtons = () => {

        document.getElementById("button-1").disabled = true;
        document.getElementById("button-2").disabled = true;
        document.getElementById("button-3").disabled = true;
        document.getElementById("button-4").disabled = true;

    };

  
    // We will wait for a period of time before enabling buttons
    // If program is in the middle of presenting button press series
    // to player, we will wait until it's done so that player can't start
    // clicking in the middle of buttons press series being presented.
    // Otherwise if player is in the middle of pressing buttons
    // we will enable buttons right away
    this.enableButtons = (whoCalledMe) => {

        if (whoCalledMe == "fromHandleCorrectPlayerInput" )
            var enableWait = 500;
        else
            var enableWait = (this.round + 0 ) * 1000;

        setTimeout ( () => {
            document.getElementById("button-1").disabled = false;
            document.getElementById("button-2").disabled = false;
            document.getElementById("button-3").disabled = false;
            document.getElementById("button-4").disabled = false;
        }, enableWait)

    };

    this.presentButtonSeriesToPlayer = () => {
        this.buttonPressSeries.present();
        this.enableButtons("fromPresentButtonSeriesToPlayer");
    };

    this.nextRound = () => {
        this.readyForNextRound = false;
        this.disableButtons();
        this.incRound();
        this.zeroOutRoundStep();
        this.incRoundStep();  
        this.buttonPressSeries.resetSoundWait();      
        this.buttonPressSeries.addButtonPress();
        this.presentButtonSeriesToPlayer();
        

    };

    this.reset = () => { 

        this.buttonPressSeries.reset();
        this.setRound(0);
        this.roundStep = 0;
        this.readyForNextRound = false;


    }

};