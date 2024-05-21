export class Seance {
    constructor(
        public date: string,
        public time: string,
        public type: string,
        public price: string,
        public filmId?:string,
        public hallId?:string,
        public id?: string,
    ) {}
}