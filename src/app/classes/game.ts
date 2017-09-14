export class Game {

    name: string;
    player: string;
    win: boolean;

    //adivina numero
    randomValue: any;
    userNumber: any;
    min:number;
    max:number;

    constructor() {
        this.name = "";
        this.player = "";
        this.win = false;

        this.min = 1;
        this.max = 11;
    }

    public verify() {
        if (this.userNumber == this.randomValue) {
            this.win = true;
        } else {
            this.win = false;
        }
        return this.win;
    }

    public generateRandomValue() {
        let randomNumber = Math.random() * (this.max - this.min) + this.min;
        this.randomValue = Math.floor(randomNumber);
    }
}