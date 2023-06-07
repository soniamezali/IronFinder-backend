const isAdmin = (req, res, next) => {
  console.log(req.user.role);
  if (req.user.role === "Admin") {
    next();
  } else {
    return res.status(401).json({ message: "Denied !" });
  }
};

module.exports = { isAdmin };
