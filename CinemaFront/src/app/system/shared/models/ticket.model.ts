export class Ticket {
    constructor(
        public row:	number,
        public place: number,
        public seanceId?: string,
        public id?: string,
    ) {}
}