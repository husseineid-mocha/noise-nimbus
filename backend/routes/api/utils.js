const csrfProtection = require("csurf")({ cookie: true });

const asyncHandler = (fn) => (req, res, next) => fn(req, res, next).catch(next);

module.exports = {
  csrfProtection,
  asyncHandler,
};
