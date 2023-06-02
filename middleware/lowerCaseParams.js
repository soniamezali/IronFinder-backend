function lowerCaseParams(req, res, next) {
  const lowerCaseParams = Object.fromEntries(
    Object.entries(req.params).map(([key, value]) => [key, value.toLowerCase()])
  );
  req.params = lowerCaseParams;
  next();
}

module.exports = { lowerCaseParams };
