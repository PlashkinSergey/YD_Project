export class DataUser {
    constructor(
        public id: string,
        public userId: string,
        public phone: string = "",
        public inn: string  = "",
        public pasSer: string = "",
        public pasNum: string = "",
    ) {}
}