const { log } = require('console');

class FancyLogger {
  constructor() {
    if (!FancyLogger.instance) {
      this.logs = [];
      FancyLogger.instance = this;
    }
    return FancyLogger.instance;
  }
  log(message) {
    this.logs.push(message);
    log(`Fancy ${message}`);
  }

  printLogCount() {
    log(`${this.logs.length} Logs`);
  }
}

const logger = new FancyLogger();
Object.freeze(logger);

module.exports = logger;
