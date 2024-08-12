class ApiErron extends Error {
    constructor(
        statusCode,
        message = "Something wen wrong",
        errors = [],
        stack = ''
    ) {
        super[message]
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.message = message
        this.succsess = false
        this.errors = errors
        if (stack) {
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export { ApiErron }