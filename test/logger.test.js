import winston from "winston";
const logger = winston.createLogger({
  level:"silly",
  transports: [
    new winston.transports.Console({})
  ]
});

test("create new logger", () => {

  logger.log({ level: "info", message: "Hello Error" });
  logger.log({ level: "warn", message: "Hello Warn" });
  logger.log({ level: "info", message: "Hello Info" });
  logger.log({ level: "http", message: "Hello HTTP" });
  logger.log({ level: "verbose", message: "Hello Verbose" });
  logger.log({ level: "debug", message: "Hello Debug" });
  logger.log({ level: "silly", message: "Hello Silly" });
})

test("logging with shortcut function", () => {
  logger.error("Hello Error");
  logger.warn("Hello Warn");
  logger.info("Hello Info");
  logger.http("Hello HTTP");
  logger.verbose("Hello Verbose");
  logger.debug("Hello Debug");
  logger.silly("Hello Silly");
})