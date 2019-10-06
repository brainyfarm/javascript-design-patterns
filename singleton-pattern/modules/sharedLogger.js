const { log } = require('console');

/**
 * Shared logger module which will be used everywhere
 */
class FancyLogger {
  constructor() {
    // Check if an instance exists otherwise, set it to this instance
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

// Create and export the FancyLoger instance
const logger = new FancyLogger();
//Prevent further changes to the single instance
Object.freeze(logger);

module.exports = logger;
