export class ResponseData<D> {
    constructor(
        public data: D | D[] | null,
        public statusCode: number,
        public message: string
    ) { }
}