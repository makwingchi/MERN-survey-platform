module.exports = (req, res, next) => {
  if (req.user.credits < 1) {
    return res.status(403).send({ error: "You don't have enough credits!" });
  }
  // if user has enough credits, pass to the next handler
  next();
}