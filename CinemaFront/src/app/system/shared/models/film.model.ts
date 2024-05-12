export class Film {
    constructor(
        public name: string,
        public duration: string,
        public genre: string,
        public director: string,
        public distributorId?: string,
        public id?: string,
    ) {}
}