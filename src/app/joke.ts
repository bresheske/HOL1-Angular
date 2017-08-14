import { Vote } from "./vote";

export class Joke {
    constructor(
        public setup:string,
        public punchline:string,
        public lols:Vote,
        public groans:Vote,
        public id:number
    ) {

    }

    public incrementLol() {
        this.lols.increment();
    }

    public incrementGroans() {
        this.groans.increment();
    }
}
