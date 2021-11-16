const winston = require("winston");

const chalk = require("chalk");


const logConfiguration = {
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.label({
            label: chalk.red(`Fecha`)
        }),
        winston.format.timestamp({
            format: 'MMM-DD-YYYY HH:mm:ss'
        }),
        winston.format.printf(info => `${info.label}:${[info.timestamp]} ${info.level}:${info.message}`),
    )
};

const logger = winston.createLogger(logConfiguration);

// Log a message
logger.info(chalk.red("Mensaje"));