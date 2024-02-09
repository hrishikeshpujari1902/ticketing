import { CustomError } from "./custom-errors";

export class NotFoundError extends CustomError {
    statusCode = 400;

    constructor() {
        super('Route Not Found');
        //only because we are extending a built in class
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
    serializeErrors() {
        return [{
            message: 'Not Found'
        }]

    }
}