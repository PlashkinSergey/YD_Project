export class User {
    constructor(
        public name: string,
        public password: string,
        public email: string,
        public type: string,
        public id?: string, 
    ) {}
}