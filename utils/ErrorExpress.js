// ExpressError.js
class ExpressError extends Error {
  constructor(status, message) {
    super(message); // pass message to built-in Error constructor
    this.status = status;
  }
}

module.exports = ExpressError;
