export function internalServerError() {
    return {
        name: "InternalServerError",
        message: "Internal Server Error",
    };
};

export function conflict(message) {
    return {
        name: "ConflictError",
        message,
    };
};

export function incorrectRequestBodyFormatsError() {
    return {
      name: "incorrectRequestBodyFormatsError",
      message: "Email and/or password are incorrect",
    };
}