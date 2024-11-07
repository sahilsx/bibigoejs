const register = (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res
      .status(400)
      .render("register", { message: "Please provide all fields" });
  }

  return res.render("register", { message: "User created successfully" });
};

const login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .render("login", { message: "Please provide all fields" });
  }

  return res.render("login", { message: "Logged in successfully" });
};

export { register, login };
