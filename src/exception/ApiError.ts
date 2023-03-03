export class ApiError {
    code: Number = 0
    title: string = ""
    errorCd: string = ""
    message: string = ""
    constructor(errorCd: string, code: Number, message: string, title: string) {
        this.errorCd = errorCd
        this.code = code
        this.message = message
        this.title = title
    }
}