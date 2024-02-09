import { CustomError } from "./custom-errors";

export class DatabaseConnectionError extends CustomError {
    statusCode = 500;
    reason = 'Error Connecting to Database';
    constructor() {
        super('Error Connecting to Database');

        //only because we are extending a built in class
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);


    }
    serializeErrors() {
        return [
            {
                message: this.reason,

            }
        ]
    }
}