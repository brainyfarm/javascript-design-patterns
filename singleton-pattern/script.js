/**
 * Single pattern
 * use to create a shared object used by all parts of your application
 * Such that your whole app shares this only instance.
 * No need to create multiple instance
 * Singletons are in essense shared Globals and as such
 * Can make testing difficult since singletons are not decoupled.
 * Could also lead to race conditions
 */

 // Import the share logger instance
const logger = require('./modules/sharedLogger');

// Simulate call by first file
logger.log('Hello');

// Simulate call by second file
logger.log('Hi');

// Simulate call by file 3 to count logs
logger.printLogCount(); // 2
