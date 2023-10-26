import winston from "winston";

const logger = winston.createLogger({
  level: "info",
  transports: [
    new winston.transports.Console({}),
    new winston.transports.File({
      handleExceptions: true,
      handleRejections: true,
      filename: "rejection.log"
    }),
  ]
})

function testRejection() {
  return Promise.reject("ups rejection")  
}
testRejection();