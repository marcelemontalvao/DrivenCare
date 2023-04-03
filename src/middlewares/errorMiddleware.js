import httpStatus from "http-status";

export function handleErrors(err, res) {
    if(err.name === "InternalServerError") {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
            message: err.message,
        });
    } else if(err.name === "ConflictError") {
        return res.status(httpStatus.CONFLICT).send({
            message: err.message,
        });
    } else {
        return res.status(httpStatus.NOT_FOUND).send({
            message: err.message,
        });
    };
};