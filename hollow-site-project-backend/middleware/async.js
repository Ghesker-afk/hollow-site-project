// our goal is to avoid the bunch of try/catch blocks

const asyncWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  }
};

module.exports = asyncWrapper;