import winston from "winston";

test("logging with file transport", () => {
  const logger = winston.createLogger({
    level: "info",
    transports: [
      new winston.transports.Console({}),
      new winston.transports.File({
        filename: "application.log"
      }),
      new winston.transports.File({
        filename: "mylog.log"
      }),
    ]
  })
  logger.info("hello world");
  logger.info("hello world 2");
})
