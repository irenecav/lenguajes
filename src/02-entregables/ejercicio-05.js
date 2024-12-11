console.log("************** DELIVERABLE 05 *********************");
class SlotMachine {
    constructor(){
        this.coins = 0;
    }

    play(){
        this.coins ++
        let luck = [true, false]
        for(let i = 0; i < 3; i++){
            let index = Math.floor(Math.random() * 2);
            console.log(index)
            console.log(luck[index])
            if(!luck[index]){
                return console.log('Good luck next time!!')
            }
        }
        return console.log(`Congratulations!!!. You won ${this.coins} coins!!`)

    }

  }
  
  const machine1 = new SlotMachine();


  machine1.play(); // "Good luck next time!!"
  machine1.play(); // "Good luck next time!!"
  machine1.play(); // "Congratulations!!!. You won 3 coins!!"
  machine1.play(); // "Good luck next time!!"
  machine1.play(); // "Congratulations!!!. You won 2 coins!!"