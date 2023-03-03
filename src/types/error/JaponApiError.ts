export class JaponApiError extends Error {
    errorCd: String = ""
    status: Number = 0
    constructor(errorCd: String, status: Number) {
        super()
        this.errorCd = errorCd
        this.status = status
    }
}