const homecontroller = (req, res) => {
  const data = {
    welcome: "Welcome to the home page",
    name: "sahil",
  };
  res.render("index", data);
};

export { homecontroller };
