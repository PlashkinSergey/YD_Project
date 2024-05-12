export class Seance {
    constructor(
        public type: string,
        public price: string,
        public filmId?:string,
        public hallId?:string,
        public id?: string,
    ) {}
}