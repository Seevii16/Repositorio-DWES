const winston = require("winston");

const logConfiguration = {
    transports: [
        new winston.transports.Console({
            level: "info",
        }),
        new winston.transports.Console({
            level: "warn",
        }),
        new winston.transports.Console({
            level: "error",
        }),
    ],
};

const logger = winston.createLogger(logConfiguration);

logger.log({
    message: "400",

    level: "warn",
});

logger.log({
    message: "500",

    level: "error",
});
// Log a message
logger.info("200");