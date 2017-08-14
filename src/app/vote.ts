export class Vote {
    constructor(
        public votes:number
    ) {

    }
    get voteCount(): number {
        return this.votes;
    }
    increment() {
        this.votes++;
    }
}
